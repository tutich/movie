import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Authentication from './components/AuthDetails';
import HomePage from './components/movie/HomePage';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUp />}/>
            <Route path='/sign' element={<SignIn/>}></Route>
            <Route path='/home' element={<HomePage />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
