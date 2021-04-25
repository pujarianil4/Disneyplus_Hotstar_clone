//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
  
    <div className="App">
  <div>
  <Navbar/>
  </div>

 <div style={{marginTop:"75px"}}>
 <Home/>
 </div>
    </div>
  
  );
}

export default App;
