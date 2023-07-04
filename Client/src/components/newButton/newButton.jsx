import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getButtons } from "../../Redux/actions";

function NewButton({first}){

    const dispatch=useDispatch();
    const [body, setBody]=useState({})
    const [error, setError]=useState('');

    const handleSubmit=async(event)=>{
        event.preventDefault()
        try {
            await axios.post('/',body)
            dispatch(getButtons())
            setBody({})
        } catch (error) {
           setError(error.response.data.error)
           setBody({})
        }
    }

    const handleChange=(event)=>{
        const value=event.target.value
        const regex=/^[1-9]\d*$/
        if(regex.test(value)){
            setBody({name:event.target.value})
            setError('')
        }else{
            setBody({})
            setError('El valor ingresado debe ser un número mayor que cero')
        }
    }

    return(
        <form>
            <input type='text' placeholder='Número de botón' value={body.name?body.name:''} onChange={handleChange}></input>
            <button type='submit' onClick={handleSubmit} disabled={error||!body.name}>{!first?'Primer botón':'Agregar botón'}</button>
            {error&&<p>{error}</p>}
        </form>
    )

}

export default NewButton