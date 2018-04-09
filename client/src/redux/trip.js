import axios from "axios";
const tripURL = "/trip/"

const tripReducer = (prevTrips = { loading: true, data: [] }, action) => {
    switch (action.type) {
        case "ADD_TRIP":
            return { loading: false, data: [...prevTrips.data, action.data] }
        case "GET_TRIPS":
            return { loading: false, data: action.data }
        case "DELETE_TRIP":
            return {
                loading: false, data: prevTrips.data.filter((issue) => {
                    return issue._id !== action.id
                })
            }
        case "ADD_TO_ARRAY":
            return {
                loading: false, data: prevTrips.data.map((trip) => {
                    if (trip._id === action.id) {
                        return action.updatedTrip
                    } else {
                        return trip;
                    }
                })
            }
        default: return prevTrips;
    }

}

export const addTrip = (inputs) => {
    return dispatch => {
        axios.post(tripURL, inputs)
            .then((response) => {
                let { data } = response
                dispatch({
                    type: "ADD_TRIP",
                    data
                })
            })
    }


}
export const getTrips = () => {
    return dispatch => {
        axios.get(tripURL)
            .then((response) => {
                let { data } = response
                dispatch({
                    type: "GET_TRIPS",
                    data
                })
            })
    }
}
export const deleteTrip = (id) => {
    return dispatch => {
        axios.delete(tripURL + id, id)
            .then((response) => {
                dispatch({
                    type: "DELETE_TRIP",
                    id
                })
            })
    }
}

export const addToArray = (id, itemId) => {
    return dispatch => {
        axios.put(tripURL + id, {$addToSet: {items: itemId }})
            .then((response) => {
                dispatch({
                    type: "ADD_TO_ARRAY",
                    updatedTrip: response.data,
                    id
                })
            })
    }
}

export default tripReducer