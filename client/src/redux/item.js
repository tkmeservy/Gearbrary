import axios from "axios";
const itemURL="/item/"

const itemReducer= (prevItems = {loading:true, data:[]}, action)=>{
    switch(action.type){
        case "ADD_ITEM":
            return {loading: false, data: [...prevItems.data, action.data]}
        case "GET_ITEMS":
            return {loading:false, data: action.data}
        case "DELETE_ITEM":
            return {loading: false, data: prevItems.data.filter((item)=>{
                return item._id !== action.id
            })}
        default: return prevItems;
    }

}

export const addItem=(inputs)=>{
    return dispatch =>{
        axios.post(itemURL, inputs)
            .then((response)=>{
                let {data}=response
                dispatch({
                    type: "ADD_ITEM",
                    data
                })
            })
    }


}
export const getItems=()=>{
    return dispatch =>{
        axios.get(itemURL)
            .then((response)=>{
                let{data}=response
                dispatch({
                    type: "GET_ITEMS",
                    data
                })
            })
    }
}
export const deleteItem=(id)=>{
    return dispatch =>{
        axios.delete(itemURL+id, id)
            .then((response)=>{
                dispatch({
                    type: "DELETE_ITEM",
                    id
                })
            })
    }
}

export default itemReducer