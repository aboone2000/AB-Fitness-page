import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function Def() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/Home')
    }

  return (
    <div className='div1'>
        <h2>Welcome to AB Fitness</h2>
        <br/>

        <Button className='btn-1' onClick={handleClick} variant='primary' >Go To Home Page</Button>


    </div>
  )
}

export default Def