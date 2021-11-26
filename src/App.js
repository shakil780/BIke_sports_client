import logo from './logo.svg';
import './App.css';

import Navication from './components/Navication/Navication';
import Addbook from './components/Addbook/Addbook'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Allservices from './components/Allservices/Allservices';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Registar from './components/Ragistar/Ragistar'
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import BikeBooking from './components/BikeBooking/BikeBooking';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import MangeAllorder from './components/MangeAllorder/MangeAllorder';
import Reviews from './components/Reviews/Reviews';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import prayment from './components/Prayment/Prayment';
import Prayment from './components/Prayment/Prayment';
import MangeOrder from './components/MangeOrder/MangeOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          
          <Navication></Navication>
          <Switch>
            <Route path="/login">
             <Login></Login>
             </Route>
             <PrivateRoute path="/bookingbike/:bikeID">
             <BikeBooking></BikeBooking>
             </PrivateRoute>
              <PrivateRoute  path="/order">
              <Order></Order>
              </PrivateRoute>
               <PrivateRoute path="/dashboard">
               <Dashboard></Dashboard>
               </PrivateRoute>
              <PrivateRoute path="/review">
              <Reviews></Reviews>
              </PrivateRoute>
               <PrivateRoute path="/mangeorder">
               <MangeAllorder></MangeAllorder>
                </PrivateRoute>          
                <PrivateRoute path="/addbook">
                <Addbook>  </Addbook>
                </PrivateRoute>
                <PrivateRoute path="makeadmin">
                  <MakeAdmin></MakeAdmin>
                </PrivateRoute>
                <PrivateRoute path="/prayment">
                  <Prayment></Prayment>
                </PrivateRoute>
             <Route path="/reagistar">
              <Registar></Registar>
             </Route>
             <PrivateRoute path="/orders">
               <MangeOrder></MangeOrder>
             </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
             <Home></Home>
            </Route>
            <Route path="/allservices">
             < Allservices></ Allservices>
            </Route>
          </Switch>
           <Footer></Footer>
        </Router>
      </AuthProvider>
       
 
    </div>
  );
}

export default App;
