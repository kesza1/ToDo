import { Button } from '@heroui/react';
import React from 'react'
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { RiResetLeftFill } from "react-icons/ri";
import { MyImage } from './MyImage';





const Counter = () => {
  const [counter, setCounter]=useState(0)
  const h2Style = {
    textAlign:"center" , color:"purple"  }

    const btnMinusStyle={
    opacity:counter<5 ? 0.4 : 1,
    cursor:counter<=-5 ? 'not-allowed' :  'pointer'
    }

  return (
    <div>
      <h2 style={h2Style}>My Counter</h2>
    
      <div className="counter">
      <button onClick={()=>setCounter(prev=>prev-1)} disabled={counter<=-5} style={btnMinusStyle}>
        <CiCircleMinus size={48} color='purple'></CiCircleMinus>
      </button>
     
      <div className="nr">{counter}</div>
       
<button onClick={()=>setCounter(prev=>prev+1)} disabled={counter>=5}>
          <CiCirclePlus size={48} color='purple'></CiCirclePlus>
        </button>
 <Button onClick={()=>setCounter(0)}Reset></Button>
     </div>

{ counter && <MyImage counter={counter} maiNap='szerda'/>}

           </div>
   
   
  )
}

export default Counter




