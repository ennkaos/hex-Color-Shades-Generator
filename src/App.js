import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colors,setColors]=useState("")
  const[error,setError]=useState(false)
 
  const [list,setList]=useState(new Values("#f15025").all(5)) 
  const handleSubmit=(e,a)=>{
    e.preventDefault()
    try {
      
      let colour=new Values(colors).all(5)
      setList(colour)

    } catch (error) {
      setError(true)
      console.log(error)
    }
  
  
  }
 
  return <>
     <section className="container">
       <h3>colour generator</h3>
      <form onSubmit={handleSubmit}>
        <input className={`${error?"error":null}`} type="text" value={colors} onChange={(e)=>setColors(e.target.value)} placeholder="Hex Code"></input>
       
        <button className="btn" type="submit">Submit</button>

      </form>
      
     </section>
     <section className="colors">
       {list.map((item,index)=>{
         console.log(item)
        return <SingleColor key={index} {...item} index={index}/>
       })}
     </section>
  </>
}

export default App
