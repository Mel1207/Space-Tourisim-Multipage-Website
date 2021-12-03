import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Home from './components/home-page/Home';
import Technology from './components/Technology/Technology';
import Navbar from './components/Navbar/Navbar';
import './sass/main.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Destination />} path='/destination' />
        <Route element={<Crew />} path='/crew' />
        <Route element={<Technology />} path='/technology' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
