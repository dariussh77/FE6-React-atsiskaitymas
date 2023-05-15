import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/P3_Orgamisms/Header';
import Login from './components/P5_Pages/Login';
import Register from './components/P5_Pages/Register';
import Home from './components/P5_Pages/Home';


const App=()=>{
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>

        </Routes>

    </>
  );
}

export default App;
