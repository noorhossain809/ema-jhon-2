import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ShopingCart from './components/ShopingCart/ShopingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Review from './components/Review/Review';
import ManageInventory from './components/ManageInventory/ManageInventory';
import ProductDetails from './components/ProductDetails/ProductDetails';



function App() {
  return (
    <div className="">
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/shop">
            <ShopingCart></ShopingCart>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manageInventory">
            <ManageInventory></ManageInventory>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
        </Switch>
        <Route exact path="/">
            <ShopingCart></ShopingCart>
          </Route>
      </Router>
     
    </div>
  );
}

export default App;
