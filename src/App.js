import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Cover/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
