import React, { useState } from 'react'
import Button from './Button';
import './App.css'
import './style.css'
import { Audio, Rings } from 'react-loader-spinner';

export default function Joke() {
   const [joke,setjoke] = useState("");
   const [btn,setbtn] = useState(false)

   const fetchApi = ()=>{
    setbtn(true)
      fetch("https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088")
      .then((res)=> res.json())
      .then((data)=>setjoke(data.jokeContent))
      setTimeout(()=>{
        setbtn(false)

      },800)
      
   }
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      {
        !btn?<Button callApi={fetchApi}/>:<Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
      }
     
      
      
      <p style={{display:`${joke != ""?'block':'none'}`, background:'white', padding:10 , borderRadius:10, fontFamily:'sans-serif'}}>{joke}</p>

      
    </div>
  )
}
