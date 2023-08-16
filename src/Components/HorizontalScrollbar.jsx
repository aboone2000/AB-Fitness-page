import { Box, Typography } from '@mui/material'
import React,{useContext} from 'react';
import BodyPart from './BodyPart'
import LeftArrowIcon from './assets/LeftarrowIcon.png'
import RightArrowIcon from './assets/RightArrowIcon.png'
import {ScrollMenu, VisibilityContext}from 'react-horizontal-scrolling-menu'
import {Button} from '@mui/material';



const LeftArrow = () => {
  const {scrollPrev} = useContext(VisibilityContext);

  return(
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt='arrow' height="40px"/>
</Typography>
  )
}

const RightArrow = () => {
  const {scrollNext} = useContext(VisibilityContext);

  return(
    <Button onClick={() => scrollNext()} className='arrow'>
        <img src={RightArrowIcon} alt='arrow' height="40px"/>
    </Button>
  )
}








const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        { <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> }
      </Box>
    ))}
  </ScrollMenu>
);
  


export default HorizontalScrollbar
