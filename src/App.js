import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Option from './component/Option';
import Signup from './component/Signup';
import {Routes, Route} from 'react-router-dom'
import Profilesignin from './component/Profilesignin';
import User from './components/User';
import Company from './component/Company';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/option' element={<Option/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/profiledetails' element={<Profilesignin/>} />
      </Routes>
    </div>
  );
}

export default App;
