import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alert,setAlert]=useState(false)
  const bcg=rgb.join(",")
  const hex=rgbToHex(...rgb)
  const handleClick=()=>{
      setAlert(true)
      navigator.clipboard.writeText(hex)
  }
  useEffect(()=>{
  const timeout= setTimeout(()=>{
      setAlert(false)
    },3000)
  },[alert])
  return <article onClick={handleClick} className={`color ${index>10 && "color-light"}`} style={{backgroundColor:`rgb(${bcg})`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
  </article>
}

export default SingleColor
