import { useState  } from 'react'
import { Box } from '@mui/material' 

import  HeroBanner  from '../components/HeroBanner'
import  SearchExercises from '../components/SearchExercises'
import  Exercises  from '../components/Exercises'

import { MyContext } from '../context/MyContext'

const Home = () => {
  const [bodyPart , setBodyPart ] = useState('all');
  const [exercises , setExercises ] = useState([]);

  const context_data = {
    bodyPart,setBodyPart
  }
  console.log('>>>>>>>>bodypart',bodyPart)
  return (
    <Box>
      <HeroBanner />
      <MyContext.Provider value={context_data}>
        <SearchExercises setExercises={setExercises} />
        <Exercises setExercises={setExercises} exercises={exercises} />
      </MyContext.Provider>
    </Box>
  )
}

export default Home