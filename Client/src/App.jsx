import { useEffect, useState } from 'react'
import styles from "./App.module.css";
import{useDispatch, useSelector}from'react-redux'
import { getButtons } from './Redux/actions';
import Button from './components/button/button';
import NewButton from './components/newButton/newButton';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:3001/api/v1'

function App() {
    const dispatch=useDispatch();
    const buttons=useSelector((state)=>state.allButtons)
    let[flag, setFlag]=useState([]);

    useEffect(()=>{
            dispatch(getButtons())
    },[])
    
    useEffect(()=>{
        dispatch(getButtons())
    },[flag])

  return (
    <div className={styles.appContainer}>
        <NewButton first={buttons.length}/>
        <div className={styles.buttonContainer}>
            {buttons.length?(buttons.map(button=>{
                
                return(
                    <Button
                        key={button.id}
                        id={button.id}
                        name={button.name}
                        counter={button.counter}
                        flag={()=>setFlag(flag++)}
                    />
                )
            })):
            <>Crea tu primer botón</>}
        </div>
    </div>
  )
}

export default App
