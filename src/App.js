// import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/services/Services';
import Resume from './pages/resume/Resume';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Router>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
    <Footer/>
   </Router>
    </>
  );
}

export default App;
