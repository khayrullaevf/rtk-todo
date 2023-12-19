import AddToDo from "./AddToDo"

import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Button,Container } from "react-bootstrap"
import ToDoItem from "./ToDoItem"
import { removeToDo } from "./redux/todo"
const Crud = () => {


    const dispatch=useDispatch()


    const todoList=useSelector(state=>state.todo.list);






const loopTodo=todoList.map((todo)=>(
    <ToDoItem task={todo.name} key={todo.id}/>
))

  return (
    <div>
        <AddToDo/>
        {loopTodo}
    </div>
  )
}

export default Crud