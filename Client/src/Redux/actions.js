import axios from 'axios'
export const GET_BUTTONS='GET_BUTTONS'

export function getButtons(){
    return async function(dispatch){
        try {
            let buttons=await axios.get('/buttons')
            return dispatch({
                type:GET_BUTTONS,
                payload:buttons.data
            })
        } catch (error) {
            return{error:error.message}
        }
    }
}