from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend import database

database.fetch_one_todo()

app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/api/todo")
async def get_todo():
    return 1


@app.get("/api/todo/{id}")
async def get_todo_by_id(id):
    return 1


@app.post("/api/todo")
async def post_todo():
    return 1


@app.put("/api/todo/{id}")
async def update_todo(id):
    return 1


@app.delete("/api/todo/{id}")
async def delete_todo(id):
    return 1