import axios from "axios";

const Todo = (props) => {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res))
    }
    return (
        <div>
            <p>
                <span style={{"fontWeight": "bold, underline"}}>{props.todo.title}:
                </span> {props.todo.description}
                <button className="btn btn-outline-danger my-2 mx-2" 
                style={{'borderRadius': "50px"}}>X</button>
                <hr />
            </p>

        </div>
    )
}

export default Todo