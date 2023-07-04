import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getButtons } from "../../Redux/actions";

function Button({id, name, counter}){
    const dispatch=useDispatch();
    const[disabled, setDisabled]=useState(false)

    const handleClick=async()=>{

        if(disabled) return;
        setDisabled(true)
        axios.patch(`/buttons/${id}`)
        .then(()=>dispatch(getButtons()))
        .then(()=>setDisabled(false))
    }

    return(
        <div>
            <button onClick={handleClick} disabled={disabled}>{disabled?'AAA':name}</button>
            <>{counter}</>
        </div>
    )

}

export default Button