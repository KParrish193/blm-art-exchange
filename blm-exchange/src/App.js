import React, { useState, useEffect } from 'react';

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

// contexts
import { ArtistContext } from './contexts/ArtistContext';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';


function App() {

  // load products data from backend as productsData
  const productData = 'products placeholder'

  // load artist data from backend as productsData
  const artistData = 'artists placeholder'

  const [products] = useState(productData);
  const [artists] = useState(artistData);
  const [cart, setCart] = useState([]);

  const addItem = item => {
		console.log(item);
		setCart([...cart, item])
	};

	const removeItem = id => {
		setCart(...cart, cart.filter(item => item.id !== id));
	};

  return (

    <ArtistContext.Provider value={{ artists }}>
    <ProductContext.Provider value={{ products, addItem }}>
    <CartContext.Provider value={{ cart, removeItem }}>
    
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
          <Route path="/print/:id" component={ Shop } />
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

    </CartContext.Provider>
    </ProductContext.Provider>
    </ArtistContext.Provider>
  );
}

export default App;