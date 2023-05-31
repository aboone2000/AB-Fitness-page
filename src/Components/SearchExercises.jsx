import React, {useEffect, useState} from 'react'
import {Box, Button, Stack, TextField, Typography} from '@mui/material'
import {exerciseOptions, fetchData} from '../Utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'






const SearchExercises = () => {


  const [search, setsearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all, ...', bodyPartsData])
    }
   
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

        const searchExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
       || exercise.target.toLowerCase().includes(search)
       || exercise.equipment.toLowerCase().includes(search)
       || exercise.bodyPart.toLowerCase().includes(search)
        )
        setsearch()
        setExercises(searchExercises)
    }

  }

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize:{lg:'44px',xs:'30px'}
      }}>
        Awesome Exercises you<br/> should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input:{fontWeight: '700',border:'none', borderRadius:'4px' },

            width: {lg:'1000px',xs:'350px'},
            backgroundColor: '#FFFF',
            borderRadius:'40px'
        }}
         height="76px"
        value={search}
        onChange={(e) => {setsearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
        type='text'
        />
        <Button className='search-btn'
        
        sx={{
          bgcolor:'#3A1',
          color:'#fff',
          textTransform:'none',
          width:{lg:'173px', xs:'80px'},
          fontSize:{lg:'20px', xs:'14px'}
        ,
        height:'56px',
        position:'absolute',
        right:'0px'
        }}

        onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts}/>
      </Box>

    </Stack>
  )
}

export default SearchExercises
