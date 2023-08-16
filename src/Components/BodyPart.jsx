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

    sx={bodyPart === item ? { 
      borderTop: '4px solid #3A1', 
      background: '#fff', 
      borderBottomLeftRadius: '20px', 
      width: '270px', height: '282px', 
      cursor: 'pointer', gap: '47px' } : 
      { background: '#fff', 
      borderBottomLeftRadius: '20px', 
      width: '270px', height: '282px', 
      cursor: 'pointer', gap: '47px' }}

    onClick={() =>{
      setBodyPart(item)
      window.scrollTo({top:1800, left:100, behavior:'smooth'})
    }}
    >
        <img src={Icon} alt='gym' style={{width: '150px', height:'150px' }}/>
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart
