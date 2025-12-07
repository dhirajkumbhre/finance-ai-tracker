# app/api/classify.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.core.model_loader import load_category_model

router = APIRouter()

class CategoryRequest(BaseModel):
    merchant: str
    description: str = ""

@router.post("/category")
def classify(req: CategoryRequest):
    try:
        model = load_category_model()
    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail=str(e))

    text = (req.merchant or "") + " " + (req.description or "")
    pred = model.predict([text])[0]
    out = {"category": pred}
    if hasattr(model, "predict_proba"):
        out["probs"] = model.predict_proba([text])[0].tolist()
        out["classes"] = model.classes_.tolist()
    return out
