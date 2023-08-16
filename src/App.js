import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {React} from 'react';
import './App.css';
import { Box } from '@mui/material';
import Navigation from './Components/Navigation';
import Home from './Components/Page/Home Page/Home';

import ExerciseDetails from './Components/Page/ExerciseDetails';
import Exercises from './Components/Exercises/Exercises';
import Footer from './Components/Footer';


function App() {

  
  return (
    <Box className="App" width="400px" sx={{width:{xl:'1488px'} }} m="auto">
      <Router>
      <Navigation/>
        <Routes>
          
          <Route path='#exercises/:id' element={<ExerciseDetails/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='#exercises' element={<Exercises/>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
      <Footer/>
    </Box>
  );
}

export default App;
