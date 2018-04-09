import {createStore, combineReducers, applyMiddleware} from "redux";
import item from "./item";
import trip from "./trip";
import modal from "./modal"
import thunk from "redux-thunk"

const rootReducer=(combineReducers({item, trip, modal}))

let store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;