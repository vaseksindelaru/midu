import React ,{useState} from 'react'



function Contador(props) {
    const[num,setnum]=useState(0)
   
    
       setInterval(() => {setnum(num+1)} ,2000) 
    
   
    
    console.log()
    
    return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default Contador
