import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; // Import Router and Routes
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';
import NewContact from './components/NewContact';
import PhoneContact from './components/PhoneContact';

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <Navbar />
      <Routes> {/* Use Routes to define routes */}
        <Route path="/" element={<Home />} /> {/* Route for the Home component */}
        <Route path="/services" element={<Services />} /> {/* Route for the Services component */}
        {/* <Route path="/contact" element={<Contact />} />  */}
        {/* <Route path="/contact" element={<NewContact/>} />  */}
        <Route path="/contact" element={<PhoneContact/>} /> 


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
