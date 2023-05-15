import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/P3_Orgamisms/Header';
import Login from './components/P5_Pages/Login';
import Register from './components/P5_Pages/Register';
import Home from './components/P5_Pages/Home';
import AddStar from './components/P5_Pages/Add';
import UsersContext from './contexts/UsersContext';
import { useContext } from 'react';


const App=()=>{
  const{loggedIn}=useContext(UsersContext);
  return (
    <>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={loggedIn?<Home/>:<h2>...esate neprisijungęs, kad pasiektumėte HOME puslapį</h2>}/>
          <Route path='/add' element={loggedIn?<AddStar/>:<h2>...esate neprisijungęs, kad pasiektumėte ADD puslapį</h2>}/>
        </Routes>

    </>
  );
}

export default App;
