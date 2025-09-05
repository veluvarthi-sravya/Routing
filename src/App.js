import Header from './Header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './contact';   // ⚡ check file name case
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />   {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
