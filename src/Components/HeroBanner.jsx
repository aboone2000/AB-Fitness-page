import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'




const HeroBanner = () => {
  return (
   <Box sx={{
    mt: {lg: '212px', xs: '80px'},
    ml:{sm: '50px'}
   }}position="relative" p="20px">
    <Typography color="#3A1"
    fontWeight="600" fontSize="26px">
        AB Fitness
    </Typography>
    <Typography fontWeight={700}
    sx={{fontSize:{lg:'45px',xs:'39px'}
    }}
    >
      No Pain, No Gain <br/> If you not feeling pain<br/> your not going to see results
    </Typography>
    <Typography fontSize="22px"
    lineHeight="35px" mb={3}>
      Check out the most effective exercises
    </Typography>
    <Button variant='contained' color='success'
    href='#exercises'>Explore Exercises</Button>
    <img src='' alt='banner'
    className='hero-banner-img'/>
   </Box>
  )
}

export default HeroBanner
