// Dependencies and Component Imports

import React from 'react'
import ProjectList from './ProjectList'

// Styling Imports

import './home.css'

// Material UI Imports

import { Button, Container, Stack, Typography } from '@mui/material';

const Home = () => {

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = "https://raw.githubusercontent.com/Iv9eni/Resume/main/Resume2021.pdf";
    link.href = "https://raw.githubusercontent.com/Iv9eni/Resume/main/Resume2021.pdf";
    link.click();
  };

  const onContact = () => {
    const link = document.createElement("a");
    link.download = "https://raw.githubusercontent.com/Iv9eni/Resume/main/Resume2021.pdf";
    link.href = "https://raw.githubusercontent.com/Iv9eni/Resume/main/Resume2021.pdf";
    link.click();
  };


  return (
    <div className="home">
        <Container className="intro">
          <h3>Ivgeni Darinski</h3>
          <Typography>Welcome to my Project Archive</Typography>
          <Stack 
            direction="row" 
            justifyContent="center"
            spacing={1}
            className="introButtons">
            <Button onClick={onDownload} variant="contained" size="small">Resume</Button>
            <Button key="Email" component="a" href="mailto:ivgeni.darinski@hotmail.com" variant="outlined" size="small">Contact</Button>
          </Stack>
        </Container>
        <ProjectList />
    </div>
  )
}

export default Home