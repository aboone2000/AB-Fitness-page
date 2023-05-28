import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {React} from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './Components/Home Page/Home';

import ExerciseDetails from './Components/ExerciseDetails';
import Exercises from './Components/Exercises/Exercises';


function App() {

  
  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
