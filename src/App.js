import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import './App.css'
import BookingStep2 from './pages/BookingStep2';
import TourLisst from './pages/TourLisst';
import Specific from './pages/Specific';
import BookingStep1 from './pages/BookingStep1';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/landing" element={<Landing />} /> */}

        <Route path="/bookingStep2" element={<BookingStep2 />} />
        <Route path="/bookingStep1" element={<BookingStep1 />} />
        <Route path="/tourlist" element={<TourLisst />} /> 
        <Route path="/specific" element={<Specific />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
