# app/api/forecast.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from app.core.model_loader import load_forecast_model
from app.core.preprocessing import build_lag_features

router = APIRouter()

class ForecastRequest(BaseModel):
    recent: List[float]  # last values, most recent last
    steps: Optional[int] = 3

@router.post("/predict")
def predict(req: ForecastRequest):
    try:
        model, n_lags = load_forecast_model()
    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail=str(e))

    if len(req.recent) < n_lags:
        raise HTTPException(status_code=400, detail=f"Need at least {n_lags} recent values")

    # predict step-by-step
    recent = list(req.recent[-n_lags:])
    preds = []
    for _ in range(req.steps):
        X = build_lag_features(recent, n_lags)
        p = float(model.predict(X)[0])
        preds.append(p)
        recent.append(p)
    return {"predictions": preds, "n_lags": n_lags}
