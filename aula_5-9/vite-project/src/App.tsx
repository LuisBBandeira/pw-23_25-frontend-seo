import './App.css'
import { Routes , Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import AboutPage from './pages/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
    </Routes>
  )
}

export default App
