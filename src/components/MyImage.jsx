import React from 'react'

export const MyImage = ({counter}) => {
  //console.log(props);
  console.log(counter);
  const url=`https://picsum.photos/id/${counter+20}/400`
    return (
    
    <div className='flex items-center flex-col bg-amber-50 p-3 max-w-3xs m-auto'>

    
   
   <h2>Kutyi kutyi</h2>   
<img src={url} alt='kutyikutyikutyi' className='border rounded-3xl'/>  
   </div>
  )
  
}

