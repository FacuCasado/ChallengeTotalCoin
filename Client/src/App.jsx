import { useEffect, useState } from 'react'
import './App.css'
import{useDispatch, useSelector}from'react-redux'
import { getButtons } from './Redux/actions';
import Button from './components/button/button';
import NewButton from './components/newButton/newButton';
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3001/api/v1'

function App() {
    const dispatch=useDispatch();
    const buttons=useSelector((state)=>state.allButtons)
    const[prevButtons, setPrevButtons]=useState([]);

    useEffect(()=>{

        if(JSON.stringify(prevButtons)!==JSON.stringify(buttons) || !buttons.length){
            dispatch(getButtons())
        }

        setPrevButtons(buttons)
        
    },[dispatch, buttons, prevButtons])

  return (
    <>
        <NewButton first={buttons.length}/>
        {buttons.length?(buttons.map(button=>{
            return(
                <Button
                    key={button.id}
                    id={button.id}
                    name={button.name}
                    counter={button.counter}
                />
            )
        })):
        <>Crea tu primer botón</>}
    </>
  )
}

export default App
