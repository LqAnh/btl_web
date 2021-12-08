import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import BookingStep2 from './pages/BookingStep2';
import TourLisst from './pages/TourLisst';
import Specific from './pages/Specific';
import BookingStep1 from './pages/BookingStep1';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import UserFile from './pages/UserFile';
import FavTour from './pages/FavTour';
import BookedTour from './pages/BookedTour';
import Contract from './pages/Contract';
import Success from './pages/Success';
import SuSuccess from './pages/SuSuccess';
import CoSuccess from './pages/CoSuccess';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bookingStep2" component={BookingStep2} />
        <Route path="/bookingStep1/:id" component={BookingStep1} />
        <Route path="/contract/:id" component={Contract} />

        {/* <Route path="/tourlist" component={TourLisst} />  */}
        <Route path="/tourlist/:slug/:id" component={TourLisst} />
        <Route path="/tourlist/:slug" component={TourLisst} />

        <Route path="/specific/:id" component={Specific} />

        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/userfile" component={UserFile} />
        <Route path="/favtour" component={FavTour} />
        <Route path="/booked" component={BookedTour} />
        <Route path="/success" component={Success} />
        <Route path="/susuccess" component={SuSuccess} />
        <Route path="/cosuccess" component={CoSuccess} />


      </Switch>
    </Router>
  );
}

export default App;
