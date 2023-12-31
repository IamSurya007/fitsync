import { Box } from '@mui/material'
import React from 'react'
import {ScrollMenu, ScroolMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu>
        {data.map((item)=>(
        <Box
        key={item.id||item}
        itemID={item.id||item}
        title={item.id||item}
        m="0 40px"
        >
            <bodyPart item={item} bodyPart={bodyPart} 
            setBodyPart={setBodyPart}/>
        </Box>
    )
    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar