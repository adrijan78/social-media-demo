import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './layout/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App" style={{backgroundColor:'#ebebeb'}}>
      <Navbar/>
      <Outlet/>
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
