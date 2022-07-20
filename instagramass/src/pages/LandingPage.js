import React, { useEffect } from 'react'
import axios from 'axios'

function LandingPage() {
    const url = "http://localhost:4100/"
    useEffect(()=>{
        axios.get(url).then((res)=>{
            console.log(res)
        }
        )},[])
  return (
    <>
        <div className='h2 text-center'>Welcome Here</div>
    </>
  )
}

export default LandingPage