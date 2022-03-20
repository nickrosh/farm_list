import Todo from './Todo';

const TodoView = (props) => {
    return(
        <div>
            <ul>
                {props.todoList.map(todo => <Todo todo={todo} />)}
            </ul>
        </div>
    )
}

export default TodoView