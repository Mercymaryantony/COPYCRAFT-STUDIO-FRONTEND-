import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Printing from './components/Printing';
import Binding from './components/Binding';
import View from './components/View';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Cover/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/printing' element={<Printing/>}/>
      <Route path='/binding' element={<Binding/>}/>
      <Route path='/view' element={<View/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
