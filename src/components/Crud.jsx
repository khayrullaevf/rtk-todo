import AddToDo from "./AddToDo"

import { useDispatch,useSelector } from "react-redux"

import ToDoItem from "./ToDoItem"
import { removeToDo } from "./redux/todo"
const Crud = () => {


    const dispatch=useDispatch()


    const todoList=useSelector(state=>state.todo.list);






const loopTodo=todoList.map((todo)=>(
    <ToDoItem task={todo.name} key={todo.id}/>
))


dispatch(removeToDo())
  return (
    <div>
      <AddToDo />
      <ul className="list-group">{loopTodo}</ul>
    </div>
  );
}

export default Crud