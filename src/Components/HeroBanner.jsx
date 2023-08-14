import React from 'react'
import {Box, Typography, Button} from '@mui/material'

import Banner from '../Components/assets/Banner.jpg'




const HeroBanner = () => {
  return (
   <Box sx={{
    mt: {lg: '212px', xs: '80px'},
    ml:{sm: '50px'}
   }}position="relative" p="20px">
    <Typography color="#3A1"
    fontWeight="550" fontSize="50px">
        AB Fitness
    </Typography>
    <Typography fontWeight={700}
    sx={{fontSize:{lg:'45px',xs:'39px'}
    }}
    mb="23px" mt="30px"
    >
      No Pain, No Gain <br/> If you not feeling pain<br/> your not going to see results
    </Typography>
    <Typography fontSize="22px"
    lineHeight="35px" mb={3}>
      Check out the most effective exercises
    </Typography>
    
    <Button variant='contained' color='success'
    href='#exercises' sx={{backgroundColor:'#3A1',
    padding:'10px'}}>Explore Exercises</Button>
    <Typography fontWeight={600}
    color="#3A1"
    sx={{
      opacity:0.1,
      display:{lg:'block', xs:'none'}
    }}
    fontSize="200px">Exercises</Typography>
    <img src={Banner} alt='Banner'
    className='Banner'/>
   </Box>
  )
}

export default HeroBanner
