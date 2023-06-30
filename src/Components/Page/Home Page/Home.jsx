import React, {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../../HeroBanner'
import SearchExercises from '../../SearchExercises'
import Exercises from '../../Exercises/Exercises'

function Home() {

  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
   <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodypart={bodyPart} 
      setBodyPart={setBodyPart}/>
      <Exercises
      setExercises={setExercises}
      bodypart={bodyPart} 
      exercises={exercises}
      
      
      />
    </Box>
  )
}

export default Home
