import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

//app routing
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

//styles
import "./App.css";
import { HomeContainer } from "./global styles/index";

//components
import Header from "./components/headers/Header";
import MobileHeader from "./components/headers/MobileHeader";
import Footer from "./components/footers/Footer";

import Landing from "./components/informational/Landing.js";
import About from "./components/informational/About.js";
import FAQ from "./components/informational/FAQ.js";
import Operations from "./components/informational/Operations.js";
import DigitalMarketing from './components/informational/DigitalMarketing';
import Legal from './components/informational/Legal';
import Development from './components/informational/Development';
import CodeOfConduct from "./components/informational/CodeOfConduct";

import ArtistTerms from "./components/artistsPortal/ArtistTerms";
import ArtistForm from "./components/artistsPortal/ArtistForm";
import Login from "./components/artistsPortal/Login";
import UploadForm from "./components/artistsPortal/UploadForm";
import ArtistDashboard from "./components/artistsPortal/ArtistDashboard";
import ArtistThankYou from "./components/artistsPortal/ArtistThankYou";

import ArtistList from "./components/ArtistList";
import ArtistProfile from "./components/ArtistProfile";
import Shop from "./components/Shop";
import PrintDetail from "./components/PrintDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

import CustTerms from "./components/customers/CustomerTerms";
import CustLogin from "./components/customers/CustLogin";
import Orders from "./components/customers/Orders";
import TransitionModal from "./components/TransitionModal";

// contexts
import { CartContext } from "./contexts/CartContext";
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [products, setProductsData] = useState([]);
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem("cart");

    if (localCart == null) {
      return [];
    } else {
      return JSON.parse(localCart);
    }
  });

  console.log("CART: ", cart);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://artxblm-backend.herokuapp.com/prints")
      .then((res) => {
        // console.log('success', res);
        var _ = require("underscore");
        const shuffledProducts = _.shuffle(res.data)
        setProductsData(shuffledProducts);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // console.log("App.js, line 55", products);

  // cart functions
  // add item to cart
  const addItem = (item) => {
    const [existingItem] = cart.filter((entry) => {
      if (entry.PrintID === item.PrintID && entry.Size === item.Size) {
        return entry;
      }
    });

    if (existingItem) {
      const target = cart.indexOf(existingItem);
      const prevQty = parseInt(cart[target].Quantity, 10);
      const updatedQty = parseInt(item.Quantity, 10);

      const updatedItem = {
        ...cart[target],
        Quantity: `${prevQty + updatedQty}`,
      };

      const newCart = cart.map((entry, i) => {
        if (i === target) {
          return updatedItem;
        } else {
          return entry;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  // remove item from cart
  const removeItem = (id, size) => {
    setCart(
      cart.filter((item) => {
        if (item.PrintID !== id) {
          return item;
        } else {
          if (item.Size !== size) {
            return item;
          }
        }
      })
    );

    const localCart = JSON.parse(localStorage.getItem("cart"));

    localStorage.removeItem("cart");

    const newCart = localCart.filter((item) => {
      if (item.PrintID !== id) {
        return item;
      } else {
        if (item.Size !== size) {
          return item;
        }
      }
    });

    if (newCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      localStorage.removeItem("cart");
    }
  };

  // edit item?

  return (

    <ProductContext.Provider value={{ products, addItem, cart }}>
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
                <Route path="/blm-art-exchange" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/FAQ" component={FAQ} />
                <Route path="/operations" component={Operations} />
                <Route path="/digitalmarketing" component={DigitalMarketing} />
                <Route path="/legal" component={Legal} />
                <Route path="/development" component={Development} />
                <Route path="/cocmodal" component={TransitionModal} />
                <Route path="/coc" component={CodeOfConduct} />

                {/* shop */}
                <Route exact path="/shop" component={Shop} />
                <Route path="/shop/print/:id" component={PrintDetail} />
                <Route exact path="/artists" component={ArtistList} />
                <Route path="/artists/:id" component={ArtistProfile} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/thank-you" component={ThankYou} />

                {/* customer */}
                <Route path="/customer/terms" component={CustTerms} />
                <Route path="/customer/login" component={CustLogin} />
                <Route path="/customer/:id" component={Orders} />

                {/* artist */}
                <Route path="/artist/login" component={Login} />
                <Route path="/artist/sign-up" component={ArtistForm} />
                <Route path="/artist/terms" component={ArtistTerms} />
                <Route path="/artist/thank-you" component={ArtistThankYou} />
                <PrivateRoute
                  path="/artist/:id/dashboard"
                  component={ArtistDashboard}
                />
                <PrivateRoute
                  path="/artist/:id/upload"
                  component={UploadForm}
                />
              </Switch>
            </div>
          </div>

          <Footer />
        </HomeContainer>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
