import {Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useUsersStore } from './store/usersStore';
import PrivateRoute from './routes/privateRoute';



function App() {
  
  return (
    
      <div className="App" style={{backgroundColor:'#ebebeb'}}>
      <Navbar/>
      <PrivateRoute/>
    </div>
    
  );
}

export default App;
