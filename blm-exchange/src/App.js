import React from 'react';

//app routing
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

//styles
import './App.css';

//components
import Header from './components/Header';

import Landing from './components/Landing.js';
import About from './components/About.js';
import FAQ from './components/FAQ.js';

import Login from './components/ArtistOnboard/Login';
import AdminDashboard from './components/ArtistOnboard/AdminDashboard';

import ArtistForm from './components/ArtistOnboard/ArtistForm';
import CoC from './components/ArtistOnboard/CodeOfConduct';
import UploadForm from './components/ArtistOnboard/UploadForm';

import ArtistList from './components/ArtistList';
import ArtistProfile from './components/ArtistProfile';

import Shop from './components/Shop';
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
          <Route exact path="/" component={ Landing } />
          <Route path="/about" component={ About } />
          <Route path="/FAQ" component={ FAQ } />

          {/* shop */}
          <Route path="/shop" component={ Shop } />
          <Route path="/artists" component={ ArtistList } />
          <Route path="/artists/:id" component={ ArtistProfile } />
          <Route path="/inquiry/:id" component={ Inquiry } />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />

          {/* artist */}
          <Route path="/login" component={ Login } />
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