import React,{useState} from 'react'


function Formulario() {
    const [notes, setNotes] = useState([])
    const [newNotes,setNewNotes] = useState('')
   
   
    
  
    const handelChange = (event) => {setNewNotes(event.target.value)}
    
    const handelClick = (event) => {
      const notesToAdd = {
      title: newNotes,
      body: newNotes,
      userId: notes.length +1,
    }
     setNotes(notes.concat(notesToAdd))
   }
  return (
    <div>
        <ol>
           {notes.map((note)=>
           (<div key={note.id}>
             <p>{note.userId}</p>
             <p>{note.id}</p>
           <p>{note.title}</p>
           <p>{note.body}</p>
           
           </div>))}
        </ol>
      <input type="text" onChange={handelChange} value={newNotes}></input>
      <button onClick = {handelClick}>enviar</button>

    </div>
  )
}

export default Formulario
