import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paging/Home';
import About from './paging/About';
import Achieve from './paging/Achieve';
import Solutions from './paging/Solutions';
import ContactUs from './paging/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
        <div className="app">
          <div className='content'>
            <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about-us' exact element={<About />} />
            <Route path='/achievements' exact element={<Achieve/>} />
            <Route path='/solutions' exact element={<Solutions />} />
            <Route path='/contact-us' exact element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
