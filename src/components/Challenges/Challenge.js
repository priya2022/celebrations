import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import './challenge.css'

//bootstrap

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

//reduxjs/toolkit
import { useDispatch, useSelector } from 'react-redux'
import {saveChallenges} from '../Features/challenges'
import { FeaturedProject } from '../Features/PublicSlice';


//selecting particular values from the challenges


  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));
  

  
    const selectChallenges = (state) => state.feature.features.map(submittedProject=>
      ({

        id: submittedProject.id,
        uniqueUserId:submittedProject.userId,
        isSubmit: submittedProject.isSubmitted

      })
      )


export default function Challenge() {

  let buttonVariant=''

  let buttonText=''

  const challenge = useSelector(state=>state.challenge.challenges)
  

  const selectSubmittedInfo = useSelector(selectChallenges)


  const dispatch = useDispatch()

  const imageStyle ={
    height:"100vh",
    width:'80vw',
    border:"2px solid red"
  }

  const images={
    height:"20%",
     width:"20%",
     border:"2px solid blue",
  }

  const addingChallenges={
    width:"80vw",
    border:'2px solid red',
    height:'100vh',
    float:'right',
  }

  

  const handleInputChange =(e)=>{

    const files = e.target.files;
   const newImageSrcArray = Array.from(files).map((file)=>{
    const src =URL.createObjectURL(file);
    return{
      img:src,
      title:file.name,
    }
   })
    
    dispatch(saveChallenges(newImageSrcArray))
  }

  const handlePublicSubmit =(data)=>{
    console.log("mydata in Challenges ",data)
    const {id,img,title,isSubmitted} = data
    dispatch(FeaturedProject({...data,isSubmitted:true}))

    const isSubmittedProject = selectSubmittedInfo.find(project => project.id === id)?.isSubmit
   buttonVariant = isSubmittedProject ? 'hightlightChallenges' : ' ';
   buttonText = isSubmittedProject ? 'submitted' :'submit'

  }


  return (


    <>
    {console.log("buttonVariant",buttonVariant)}
    {console.log("buttonVariant",buttonText)}


    <Form.Group controlId="formFileMultiple" className="input">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple onChange={handleInputChange} />
      </Form.Group>


    <Box sx={{ width: "84vw", minHeight: "100vh" ,float:"right"}}>
    
    <div >
      <Masonry columns={3} spacing={2}>
        {challenge.flatMap((item, index) => (
          <div key={index} >
          <div className="MasonryContainer">
            {/* <Label>{index + 1}</Label> */}
            <img
            src={item.img}
            alt={item.title}
              // src={`${item.img}?w=162&auto=format`}
              // srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              // alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
            {/* align Text */}
            <div className="textBottom">
              <Button className={`submittedToPublic ${buttonVariant}`} variant="outline-warning" onClick={handlePublicSubmit.bind(this,item)}>{buttonText}</Button>
            </div>

            </div>

        ))}
      </Masonry>
      </div>

  </Box>

 


  </>

  );
}
