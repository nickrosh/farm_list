from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from backend import database, model


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
    response = await database.fetch_all_todos()
    return response


@app.get("/api/todo/{title}", response_model=model.Todo)
async def get_todo_by_id(title):
    response = await database.fetch_one_todo(title)
    if response:
        return response
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'there is no item with title: {title}'
        )


@app.post("/api/todo", response_model=model.Todo)
async def post_todo(todo: model.Todo):
    response = await database.create_todo(todo.dict())
    if response:
        return response
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='Something went wrong, bad request'
        )


@app.put("/api/todo/{title}", response_model=model.Todo)
async def put_todo(title: str, description: str):
    response = await database.update_todo(title, description)
    if response:
        return response
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'there is no item with title: {title}'
        )


@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await database.delete_todo(title)
    if response:
        return "Success deleted Todo Item"
    else:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f'there is no item with title: {title}'
        )