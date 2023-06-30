import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react';
import BodyPart from './BodyPart'
import LeftArrowIcon from './assets/LeftarrowIcon.png'
import RightArrowIcon from './assets/RightArrowIcon.png'
import {ScrollMenu, VisibilityContext}from 'react-horizontal-scrolling-menu'



const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);

  return(
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='arrow'/>
</Typography>
  )
}

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);

  return(
    <Typography onClick={() => scrollNext()} className='arrow'>
        <img src={RightArrowIcon} alt='arrow'/>
    </Typography>
  )
}


















const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu Left={LeftArrow}Right={RightArrow}>
      {data.map((item) => (
        <Box key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m= "0 40px"
        >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>

      )
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
