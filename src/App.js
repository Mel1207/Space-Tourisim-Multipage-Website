import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './components/Destination/Destination';
import Home from './components/home-page/Home';
import './sass/main.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' exact />
        <Route element={<Destination />} path='/destination' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
