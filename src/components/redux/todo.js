import { createSlice } from "@reduxjs/toolkit";



const toDoSlice=createSlice({
    name:'todo',
    initialState:{list:[]},
    reducers:{
        addToDo(state,action){
            state.list.push(action.payload)
        },
        removeToDo(state,action){
           state.list= state.list.filter((todo)=>!todo.id==action.payload?.id)
        },
        updateStatus(state,action){
            const updateAt=new Date().toLocaleString()
            state.list.map((todo)=>todo.id===action.payload?{...todo,isDone:true,updateAt}:todo)
        }
    }
})


const{actions,reducer}=toDoSlice

export default reducer

export const {addToDo,removeToDo,updateStatus}=actions


