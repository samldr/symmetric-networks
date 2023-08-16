import { ArrowLeft, Sun, Moon } from 'phosphor-react'
import React from 'react'
import "../style.css"

export const Top = () => {
  return (
    <div className="nav">
    <div className='nav' style={{alignItems: "center"}}>
        <ArrowLeft size={32} style={{paddingRight: 12}}/>
        <h1>Symmetric Networks</h1>
    </div>
    <div className="btn-out">
        <Sun size={32}/><Moon size={32}/>
    </div>
</div>
  )
}
