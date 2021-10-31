import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPackage from "./components/AddPackage/AddPackage";
import AllOrder from "./components/AllOrder/AllOrder";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import TotalOrders from "./components/TotalOrders/TotalOrders";
import AuthProvider from "./context/AuthProvider";
import './App.css';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/booking/:packageId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/myorders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
          </PrivateRoute>
          <Route path="/allOrders">
           <TotalOrders></TotalOrders>
          </Route>
          <PrivateRoute path="/addPackage">
            <AddPackage></AddPackage>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
