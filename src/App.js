import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Def from './Components/Default';

function App() {
  return (
    <div className="Welcome">
      <Router>
        <Routes>
          <Route path='/' element={<Def/>}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
