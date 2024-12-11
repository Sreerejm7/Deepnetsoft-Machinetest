
import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route element={<Home/>} path='/home'/>
        <Route element={<Menu/>} path='/menu'/>
        <Route element={<Reservation/>} path='/reservation'/>
      </Routes>
    </div>
  );
}

export default App;
