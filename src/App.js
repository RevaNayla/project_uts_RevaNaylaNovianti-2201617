import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Biodata from './components/biodata/Biodata';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <div>
  
    <Router>
    <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/biodata' element={<Biodata />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    <Footer />
    </Router>

    </div>
  );
}

export default App;
