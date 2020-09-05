import React, { useContext, useState, useRef } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

import {
  PrimaryButton,
  TagButton,
  PrintForm,
  PrintDisplay,
  PrintContent,
  PrintContainer,
  PrintDetailContainer,
} from "../global styles";

function PrintDetail(props) {
  const { products, addItem, cart } = useContext(ProductContext);
  const { id } = useParams();

  // state for price
  const [price, setPrice] = useState();

  const cartRef = useRef();
  cartRef.current = cart;

  const sizeToPrice = {
    "5x7": "$15.00",
    "8x8": "$25.00",
    "8x10": "$25.00",
    "11x14": "$40.00",
  };
  // update price on change
  const selectChange = (e) => {
    e.preventDefault();
    setPrice(sizeToPrice[e.target.value]);
  };

  const setToStorage = (currentCart) => {
    if (currentCart === null) {
      localStorage.setItem("cart", JSON.stringify(cartRef.current));
    } else {
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify(cartRef.current));
    }
  };

  // filter of products to narrow down product by id
  const printByID = products.filter((print) => print.id == id);
  // console.log("artist by id", printByID);

  const { register, handleSubmit, errors } = useForm();

  return (
    <PrintDetailContainer>
      {printByID.map((detail, id) => (
        <PrintContainer key={id}>
          <PrintDisplay>
            <img src={detail.image.formats.small.url} />
            <div>
              <p>{detail.description}</p>
            </div>

            <div className="tags-container">
              <TagButton
                style={{
                  display:
                    `${detail.artistID.blackArtist}` === true
                      ? "block"
                      : "none",
                }}
              >
                Black Artist
              </TagButton>

              <TagButton
                style={{
                  display: `${detail.medium}` === "null" ? "none" : "block",
                }}
              >
                {detail.medium}
              </TagButton>
            </div>
          </PrintDisplay>

          <PrintContent>
            <div className="container">
              <div className="print-heading">
                <h3>{detail.title}</h3>
                <Link to={`/artists/${detail.artistID.id}`}>
                  <h4>
                    {Object.values(detail.artistID.firstName)}{" "}
                    {Object.values(detail.artistID.lastName)}
                  </h4>
                </Link>
              </div>
              {/* form for submitting print details to cart */}
              <PrintForm>
                <form
                  onSubmit={handleSubmit((data) => {
                    const printDataForCart = {
                      ...data,
                      ArtistName: `${detail.artistID.firstName} ${detail.artistID.lastName}`,
                      PrintTitle: `${detail.title}`,
                      PrintID: `${detail.id}`,
                      Price: `${price}`,
                      URL: `${detail.image.formats.small.url}`,
                    };

                    addItem(printDataForCart);
                    props.history.push("/cart");

                    const localCart = localStorage.getItem("cart");
                    setToStorage(localCart);
                  })}
                >
                  <div>
                    <label>Size:</label>
                    <select
                      onChange={selectChange}
                      name="Size"
                      ref={register({ required: true })}
                      defaultValue="select size"
                      style={{
                        width: "50%",
                        backgroundColor: "#151515",
                        color: "#fff",
                        border: "solid 1px #808080",
                        borderRadius: "5px",
                        letterSpacing: ".09rem",
                      }}
                    >
                      <option value="select size">- Select Size -</option>
                      <option value="5x7">5x7"</option>
                      <option value="8x8">8x8"</option>
                      <option value="8x10">8x10"</option>
                      <option value="11x14">11x14"</option>
                    </select>
                  </div>

                  <div>
                    {/* TODO logic to have no negative numbers */}
                    <label>Quantity:</label>
                    <input
                      type="number"
                      placeholder="0"
                      name="Quantity"
                      ref={register({ required: true, min: 1 })}
                      style={{
                        width: "40%",
                        backgroundColor: "#151515",
                        color: "#fff",
                        border: "solid 1px #808080",
                        borderRadius: "5px",
                        paddingLeft: ".3rem",
                      }}
                    />
                  </div>

                  <div className="price">
                    <label>Price: {price}</label>
                  </div>

                  <PrimaryButton onClick={console.log("click")}>
                    Add to Cart
                  </PrimaryButton>
                </form>
              </PrintForm>
            </div>
          </PrintContent>
        </PrintContainer>
      ))}
    </PrintDetailContainer>
  );
}

export default PrintDetail;
