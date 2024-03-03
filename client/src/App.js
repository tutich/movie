import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Authentication from './components/AuthDetails';

function App() {
  return (
    <div className="App">
      <SignIn />
      <SignUp/>
      <Authentication />
    </div>
  );
}

export default App;
