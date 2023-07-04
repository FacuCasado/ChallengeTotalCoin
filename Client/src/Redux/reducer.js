import { GET_BUTTONS } from "./actions"


const initialState={
    allButtons:[]
}

function rootReducer(state=initialState, action){

    switch(action.type){
        case GET_BUTTONS:
            return{...state, allButtons:action.payload}
        default:
            return{...state}
    }
}

export default rootReducer