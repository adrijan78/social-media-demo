import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App" style={{backgroundColor:'#ebebeb'}}>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default App;
