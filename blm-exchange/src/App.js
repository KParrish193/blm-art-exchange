import React from 'react';

//app routing
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

//styles
import './App.css';

//components
import Header from './components/Header';

import About from './components/About.js'
import Login from './components/Login';

import AdminDashboard from './components/AdminDashboard';

import ArtistForm from './components/ArtistForm';
import CoC from './components/CodeOfConduct';
import UploadForm from './components/UploadForm';
import ArtistProduct from './components/ArtistProduct';

import Products from './components/Products';
import Inquiry from './components/Inquiry';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>

          {/* general */}
          <Route exact path="/" component={ About } />
          <Route path="/login" component={ Login } />
          <Route path="/shop" component={ Products } />
          <Route path="/shop/:id" component={ ArtistProduct } />
          <Route path="/inquiry/:id" component={ Inquiry } />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />

          {/* artist */}
          <Route path="/sign-up" component={ ArtistForm } />
          <Route path ="/code-of-conduct" component={ CoC } />
          <PrivateRoute path="/upload" component={ UploadForm } />

          {/* admin */}
          <PrivateRoute path ="/admin" component={ AdminDashboard } />

        </Switch>
      </div>
    </div>
  );
}

export default App;