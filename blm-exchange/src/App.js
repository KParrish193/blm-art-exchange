import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router';

//app routing
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

//styles
import './App.css';
import { HomeContainer } from './global styles/index'

//components
import Header from './components/headers/Header';
import MobileHeader from './components/headers/MobileHeader';
import Footer from './components/footers/Footer';
import Landing from './components/informational/Landing.js';
import About from './components/informational/About.js';
import FAQ from './components/informational/FAQ.js';
import MeetUs from './components/informational/MeetUs.js';

import ArtistForm from './components/artistsPortal/ArtistForm';
import Login from './components/artistsPortal/Login';
import CodeOfConduct from './components/artistsPortal/CodeOfConduct';
import UploadForm from './components/artistsPortal/UploadForm';
import ArtistDashboard from './components/artistsPortal/ArtistDashboard';

import ArtistList from './components/ArtistList';
import ArtistProfile from './components/ArtistProfile';
import Shop from './components/Shop';
import PrintDetail from './components/PrintDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CustLogin from './components/customers/CustLogin';
import Orders from './components/customers/Orders';

// contexts
import { ArtistContext } from './contexts/ArtistContext';
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';

function App() {

  const [products, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  
  const { id } = useParams();

  useEffect(() => {  
      axios
      .get('https://artxblm-backend.herokuapp.com/prints')
      .then(res => {
          console.log('success', res);
          setProductsData(res.data)
      })
      .catch(err => console.log(err)); 
  }, [id]);

  console.log('App.js, line 55', products)

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
          <Route path="/meet-the-team" component={ MeetUs } />

          {/* shop */}
          <Route exact path="/shop" component={ Shop } />
          <Route path="shop/print/:id" component={ PrintDetail } />
          <Route exact path="/artists" component={ ArtistList } />
          <Route path="/artists/:id" component={ ArtistProfile } />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route path="/customer/login" component={CustLogin} />
          <Route path="/customer/:id" component={Orders} />

          {/* artist */}
          <Route path="/artist/login" component={ Login } />
          <Route path="/artist/sign-up" component={ ArtistForm } />
          <Route path="/coc" component={ CodeOfConduct } />
          <PrivateRoute path ="/artist/:id/dashboard" component={ ArtistDashboard } />
          <PrivateRoute path="/artist/:id/upload" component={ UploadForm } />

        </Switch>
      </div>
    </div>

    
    <Footer/>

    </HomeContainer>

    </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;