import './App.css';
import NavBar from './components/navbar/navbar';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Work from './pages/work';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/work" element={<Work/>} />
      </Routes>
    </Router>
  );
}

export default App;
