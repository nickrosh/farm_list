import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [todoList, setTodoList] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read all Todos
  useEffect(() => {
    axios.get('http://localhost:8000/api/todo')
      .then(res => {
        setTodoList(res.data)
      })
  })

  //Post a Todo
  const addTodoHandler = () => {
    axios.post(
      'http://localhost:8000/api/todo', {'title': title, 'description': desc}
      )
      .then(res => console.log(res))

  }



  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{"width": "400px", "backgroundColor": "white", "marginTop": "15px"}}>
      <h1 className="card text-white bg-primary mb-1">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add your Task</h5>
        <span className="card-text">
          <input type="text" className="mb-2 form-control titleIn" placeholder='Title' onChange={event => setTitle(event.target.value)}/>
          <input type="text" className="mb-2 form-control desIn" placeholder='Description' onChange={event => setDesc(event.target.value)}/>
          <button className="btn btn-outline-primary mx-2 mb-4" style={{'borderRadius': '50px', "font-weight": "bold"}} onClick={addTodoHandler}>Add Task</button>
        </span>
        <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
        <div className="">
          {/* Need Components Here */}
        </div>

      </div>
        <h6 className="card text-dark bg-warning py-1 mb-0">Copyright 2022, All Rights Reserved &copy;</h6>
    </div>
  );
}

export default App;
