const modalReducer = (modal={show:false}, action)=>{
    switch (action.type){
        case "MODAL_TOGGLE":
                return {show: !modal.show}
            default: 
                return modal
    }
}

export const modalToggle=()=>{
    return{
        type: "MODAL_TOGGLE"
    }
}

export default modalReducer