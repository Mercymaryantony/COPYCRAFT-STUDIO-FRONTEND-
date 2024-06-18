import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Printing from './components/Printing';
import Binding from './components/Binding';
import AdminPrintView from './components/AdminPrintView';
import Search from './components/Search';
import SearchBind from './components/SearchBind';

function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Cover/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/printing' element={<Printing/>}/>
      <Route path='/binding' element={<Binding/>}/>
      <Route path='/printing/adminprintview' element={<AdminPrintView/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/searchbind' element={<SearchBind/>}/>
     </Routes>
     </BrowserRouter>
  );
}

export default App;
