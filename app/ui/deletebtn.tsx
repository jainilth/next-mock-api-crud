'use client'
import React from 'react'

export default function Deletebtn(props:any) {
  return (
    <div>
      <button onClick={()=>{
        props.deleteFn(props.id)
      }}>delete</button>
    </div>
  )
}
