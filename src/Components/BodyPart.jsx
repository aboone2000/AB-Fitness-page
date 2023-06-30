import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../Components/assets/Gym.png'


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodypart-card"

    sx={{
       borderTop: bodyPart === item ? '4px solid #3A1': '',
       backgroundColor: ' #FFF',
       borderBottomLeftRadius:"20px",
       width: '290px',
       height:'250px',
       cursor: 'pointer',
       gap:'47px'
          
       

    }}

    onClick={() =>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    >
        <img src={Icon} alt='gym' style={{width: '40px', height:'40px'}}/>
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart
