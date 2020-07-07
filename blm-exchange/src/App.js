import React, { useState, useEffect } from 'react';

//app routing
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

//styles
import './App.css';
import { HomeContainer } from './global styles/index'

//components
import Header from './components/headers/Header';
import MobileHeader from './components/headers/MobileHeader';

import Landing from './components/Landing.js';
import About from './components/informational/About.js';
import FAQ from './components/informational/FAQ.js';

import ArtistForm from './components/ArtistOnboard/ArtistForm';
import Login from './components/ArtistOnboard/Login';
import UploadForm from './components/ArtistOnboard/UploadForm';
import ArtistDashboard from './components/ArtistOnboard/ArtistDashboard';

import ArtistList from './components/ArtistList';
import ArtistProfile from './components/ArtistProfile';
import Shop from './components/Shop';
import PrintDetail from './components/PrintDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

// contexts
import { ArtistContext } from './contexts/ArtistContext';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';

function App() {

  const [products, setProductsData] = useState();
  const [artists, setArtistsData] = useState();
  const [cart, setCart] = useState([]);

  // useEffect for get request from backend on app load 
  // load products data from backend as productsData
  // load artist data from backend as artistData
  
  // TODO useEffect(() => {

  //   try {   
  //       const productData = await axios.get('{prints/shop end point}');
  //       const artistData = await axios.get('{artist endpoint}}');
  //       console.log("Try Block products", productData, productData.data)
  //       console.log("Try Blocl artists", artistData, artistData.data)
        //set results to context to use as provider value={strains, stats} dispatch
  //       setArtistData(artistData.data)
  //       setProductData(productData.data)
  //       props.history.push(`dashboard/${id}`)
  //   } catch (e) {
  //       console.log(e.message)
  //   };
  // TODO }, []) 

  // cart functions
  // add item to cart
  const addItem = item => {
		console.log(item);
		setCart([...cart, item])
	};

  // remove item from cart
	const removeItem = id => {
		setCart(...cart, cart.filter(item => item.id !== id));
	};

  // edit item?

  return (
    <ArtistContext.Provider value={{ artists }}>
    <ProductContext.Provider value={{ products, addItem }}>
    <CartContext.Provider value={{ cart, removeItem }}>
    <HomeContainer>
    
      <div>
      <Header />
      <MobileHeader />
      </div>

      <div className="App">
      <div>
        <Switch>

          {/* general */}
          <Route path="/blm-art-exchange" component={ Landing } />
          <Route path="/about" component={ About } />
          <Route path="/FAQ" component={ FAQ } />

          {/* shop */}
          <Route path="/shop" component={ Shop } />
          <Route path="shop/print/:id" component={ PrintDetail } />
          <Route path="/artists" component={ ArtistList } />
          <Route path="/artists/:id" component={ ArtistProfile } />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />

          {/* artist */}
          <Route path="/artist/login" component={ Login } />
          <Route path="/artist/sign-up" component={ ArtistForm } />
          <PrivateRoute path ="/artist/:id/dashboard" component={ ArtistDashboard } />
          <PrivateRoute path="/artist/:id/upload" component={ UploadForm } />

        </Switch>
      </div>
    </div>
    </HomeContainer>

    </CartContext.Provider>
    </ProductContext.Provider>
    </ArtistContext.Provider>
  );
}

export default App;