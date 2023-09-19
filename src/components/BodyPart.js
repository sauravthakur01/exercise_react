import React from 'react'
import { Stack , Typography } from '@mui/material'

import icon from '../assets/icons/gym.png'
import { MyContext } from '../context/MyContext';
import { useContext } from "react";

const BodyPart = ({item }) => {

  const {bodyPart , setBodyPart } = useContext(MyContext)
  return (
    <Stack type='button' alignItems='center' justifyContent='center' className='BodyPart-card'
        sx={{
            borderTop: bodyPart === item ?  '4px solid #ff2626' :'',
            backgroundColor: '#fff',
            borderBottomLeftRadius : '20px',
            width: '270px',
            height: '280px',
            cursor : 'pointer',
            gap: '47px'
        }}
        onClick={()=>{
            setBodyPart(item)
            window.scrollTo({top: '1800px' , left:'100px' , behavior:'smooth'})
        }}

    >
        <img src={icon} alt='dudmbell' style={{ width:'40px', height:'40px'  }} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart