import React from 'react';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Orders from "./Orders"
import Login from "./Login";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from './Payment';

const promise = loadStripe(
  "pk_test_51NzkSoSHAdkdyqiBHMVxqyGOEw8W0JCk8amiUwlrP4oARnMEwbCw4K1K71B9y5zPmrsgBWOhqLzgbKdLuDfX3WTO00WYa8uPIJ"
)
function App() {
  return (
    <Router>
      <div className="App">
    
        <Routes>
          <Route path='/orders' element={
            <div>
            <Header />
            <Orders />
            </div>
        
          }
          />
          <Route path='/login' element={
           <Login />
          }/>
            
          <Route path='/checkout' element={
          <div>
                <Header />
              <Checkout />
          
            </div>}
             />
             <Route path='/payment' element={
              <div>
                <Header />
                <Elements stripe={promise}>
                <Payment />
                </Elements>
           
              </div>
             }
             
             />
         
          
          <Route path='/' element={
             <div>
             <Header />
             <Home />
           </div>
          } />
        
          </Routes>
      </div>
    </Router>
  );
}

export default App;
