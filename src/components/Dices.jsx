import React from 'react'
import { Button } from '@heroui/react'
import { FaDice, FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo } from 'react-icons/fa'
import { useState } from 'react'
import { generateRandNr } from './utils'

export const Dices = () => {
  const [nr , setnr] = useState(1)
    const diceComponents={
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo size={100}/>,
        3:<FaDiceThree size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>
    }
 
    return (
    <div className='flex items-center flex-col bg-indigo-200 max-w-3xl m-auto p-5' >
      <h2>Dice Roller</h2>
      <div>{diceComponents[nr]}</div>
     <Button onClick={()=>setnr(generateRandNr(1,6))}>Roll</Button>
    </div>
  )
}


