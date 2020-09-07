import React, { useContext, useEffect } from "react";

import { CartContext } from "../contexts/CartContext";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import {
  PrimaryButton,
  CartContainer,
  ProductContainer,
  AlignRight,
  AlignLeft,
  CartLabels,
  CartCard,
} from "../global styles/index";

import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeItem } = useContext(CartContext);

  const getCartTotal = () => {
    if (cart.length > 0) {
      const mappedValues = cart.map((entry) => {
        return {
          price: entry.Price,
          qty: entry.Quantity,
        };
      });

      const reduceValues = mappedValues.reduce((acc, value) => {
        const convPrice = parseInt(value.price.slice(1), 10);
        const itemQty = parseInt(value.qty, 10);

        return acc + convPrice * itemQty;
      }, 0);

      return reduceValues.toFixed(2);
    } else {
      return "0.00";
    }
  };

  return (
    <div>
      <CartContainer>
        <AlignLeft>
          <h3> Shopping Cart</h3>
        </AlignLeft>
        {/* cart */}

        <CartLabels className="labelrow">
          <p>Item</p>
          <p>Size</p>
          <p>Quantity</p>
          <p>Price</p>
        </CartLabels>

        <ProductContainer className="cart-container">
          {cart.map(
            (item) => (
              console.log(item),
              (
                <CartCard key={`${item.PrintID}${item.Size}`}>
                  <div className="item">
                    <p className="title">{item.PrintTitle}</p>
                    <p>{item.ArtistName}</p>
                    <img src={item.URL} />
                  </div>
                  <p>{item.Size}"</p>
                  <p>{item.Quantity}</p>
                  <p>{item.Price}</p>
                  <p></p>
                  <p></p>
                  <button onClick={() => removeItem(item.PrintID, item.Size)}>
                    <HighlightOffIcon />
                  </button>
                </CartCard>
              )
            )
          )}

        </ProductContainer>
        <AlignRight>
          <div className="total">
            <p>Subtotal: ${getCartTotal()}</p>
            <PrimaryButton>
              <Link to="/checkout">Checkout</Link>
            </PrimaryButton>
          </div>
        </AlignRight>
      </CartContainer>
    </div>
  );
}

export default Cart;
