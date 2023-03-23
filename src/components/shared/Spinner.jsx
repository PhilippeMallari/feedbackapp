import React from 'react'
import spinner from '../assets/spinner.gif'

export default function Spinner() {
  return (
    <img src={spinner} 
    alt="spinner loading" 
    style={{
      display: 'block',
      margin: '0 auto',
      width: '20%',
    }} />
  )
}
