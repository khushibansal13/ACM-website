import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home';
import MeetTheTeam from './pages/MeetTheTeam';
// import About from './pages/About';
// import Events from './pages/Events';
// import Team from './pages/Team';
// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/team" element={<MeetTheTeam />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;