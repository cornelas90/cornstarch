from fastapi import FastAPI, Query
import os

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Cornstarch Backend is Running"}

