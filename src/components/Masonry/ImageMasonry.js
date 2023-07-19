import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

//Reduxjs/toolkit

import { useSelector,useReducer } from 'react-redux';

  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));
  

export default function BasicMasonry() {

  const features = useSelector(state=>state.feature.features)
  return (
    <Box sx={{ width: "84vw", minHeight: "100vh" ,float:"right"}}>
    <Masonry columns={3} spacing={2}>
      {features.map((item, index) => (
        <div key={index}>
          {/* <Label>{index + 1}</Label> */}
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </div>
      ))}
    </Masonry>
  </Box>
  );
}
