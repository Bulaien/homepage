import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './Navigation';
import Home from './Home';
import Pizza from './Pizza';
function App() {
  return (
   <BrowserRouter>
   <Navigation />
   
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/pizza' element={<Pizza/>}/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
