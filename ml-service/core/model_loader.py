# app/core/model_loader.py
import os
import joblib
from typing import Tuple

BASE = os.path.dirname(os.path.dirname(__file__))
MODEL_DIR = os.path.join(BASE, "models")

FORECAST_PATH = os.path.join(MODEL_DIR, "forecast_model.joblib")
CATEGORY_PATH = os.path.join(MODEL_DIR, "category_model.joblib")

_forecast_cache = None
_category_cache = None

def load_forecast_model() -> Tuple[object, int]:
    global _forecast_cache
    if _forecast_cache is not None:
        return _forecast_cache
    if not os.path.exists(FORECAST_PATH):
        raise FileNotFoundError("Forecast model not found. Run training script.")
    obj = joblib.load(FORECAST_PATH)
    model = obj.get("model")
    n_lags = int(obj.get("n_lags", 3))
    _forecast_cache = (model, n_lags)
    return _forecast_cache

def load_category_model():
    global _category_cache
    if _category_cache is not None:
        return _category_cache
    if not os.path.exists(CATEGORY_PATH):
        raise FileNotFoundError("Category model not found. Run training script.")
    _category_cache = joblib.load(CATEGORY_PATH)
    return _category_cache

def clear_caches():
    global _forecast_cache, _category_cache
    _forecast_cache = None
    _category_cache = None
