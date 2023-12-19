

import { configureStore } from "@reduxjs/toolkit";


import todoReducer from './todo'

const rootReducer={
    todo:todoReducer
}

const store=configureStore({
    reducer:rootReducer
})

export default store