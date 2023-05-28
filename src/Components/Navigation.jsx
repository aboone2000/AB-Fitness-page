import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Fitness from './assets/Fitness.jpg'


function Navigation() {

  

    
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
        <Link to='/'>
        <img src={Fitness} alt="logo"
        style={{ width:'130px', height: '130px', margin:'0 20px'}}  />
        </Link>
        <Stack
        direction='row'
        gap='60px'
        fontSize='24px'
        alignItems="flex-end"
        >
            <Link to='/Home' style={{
              textDecoration:'none',
             color:"black", 
             borderBottom:'5px solid MediumSeaGreen'}}>
                Home</Link>
                <a href='#exercises' style={{textDecoration:'none', color:'black'}}>Exercises</a>
              </Stack>
        </Stack>
   
  )
}


export default Navigation