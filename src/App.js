import React from "react";
import "./styles.css";
import {Note} from "./Note.js";
import {useState} from "react"



export default function App (props){

const[xnote,setxnote]= useState(props.notes);
const [newnote,setnewnote]=useState('')

const handelChange = (event) => {
setnewnote (event.target.value)}

const handelClick = (event) => {
  console.log('crear nota')
  const notetoadd =
{ 
  id: xnote.length + 1,
  content: newnote ,
  date: new Date().toISOString(),
  important: Math.random() < 0.5
}
console.log(notetoadd)

setxnote(xnote.concat(notetoadd))
setnewnote('')}
  return(
  <div>
    <ol>
      {xnote.map((note)=>{
        return(
          <Note key ={note.id} {...note} />
        )
      })}
    </ol>
    <form>
      <input type='text' onChange={handelChange} value={newnote} ></input>
      <button onClick={handelClick}>crear notas</button>
    </form>
  </div>
  )
}

  



