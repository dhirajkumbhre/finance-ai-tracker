# app/api/anomalies.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
import numpy as np

router = APIRouter()

class AnomalyRequest(BaseModel):
    values: List[float]  # series of amounts

@router.post("/detect")
def detect(req: AnomalyRequest):
    arr = np.array(req.values, dtype=float)
    if arr.size < 3:
        raise HTTPException(status_code=400, detail="Need at least 3 values for anomaly detection")
    mean = arr.mean()
    std = arr.std(ddof=0)
    if std == 0:
        return {"anomalies": []}
    z = (arr - mean) / std
    # mark values with absolute z > 2 as anomalies
    anomalies = [{"index": int(i), "value": float(v), "z": float(zv)} for i, (v, zv) in enumerate(zip(arr.tolist(), z.tolist())) if abs(zv) > 2]
    return {"anomalies": anomalies}
