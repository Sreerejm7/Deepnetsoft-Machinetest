import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate}from 'react-router-dom'
import Home from './Pages/Home';
import Additem from './Pages/Additem';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Navigate to='/adminhome'/>}/>
        <Route element={<Home/>} path='/adminhome'/>
        <Route element={<Additem/>} path='/additem'/>
        <Route element={<Reservation/>} path='/reservation'/>
      </Routes>
    </div>
  );
}

export default App;
