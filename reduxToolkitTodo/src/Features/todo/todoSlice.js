import { createSlice, nanoid } from "@reduxjs/toolkit"; //nano to generate unique id

const initialState = {  //to initialize the store (can be array or can be ojb)
    todos:[{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todos', //name of the slice, We can give any name to the property(key) but the name "name" is standard in redux-toolkit
    initialState, //initial state of the slice
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                // text:action.payload.text  //payload is ojbect and it has tex but as we already written text before so no need to use payload.text again
                text:action.payload
            }
            state.todos.push(todo)
        },  //here property accept the functions, state gives us the current situation
        removeTodo:(state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            for (const todo of state.todos) {
                if(todo.id===action.payload)
                {
                    todo.text=action.payload.text
                }
            }
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer //We need to export this bcz our store only update its value from the registered reducers