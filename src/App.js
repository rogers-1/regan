import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Login/>
     <Routes>
          <Route path="/Login" component={Login} />

          </Routes>
        
    </div>
    </Router>
  );
}

export default App;
