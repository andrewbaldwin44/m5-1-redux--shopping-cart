import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getStoreItems } from "../reducers";
import CartItem from "./CartItem";

function Cart() {
  const storeItems = useSelector(getStoreItems);

  let totalPrice = storeItems.reduce((totalPrice, item) => {
    return totalPrice += (item.price * item.quantity);
  }, 0);

  totalPrice = totalPrice / 100;

  console.log(storeItems)

  return (
    <Wrapper>
      <Head>
        <h2>Your Cart</h2>
        <LightText>0 Items</LightText>
      </Head>
      {storeItems.map(item => {
        return (
          <CartItem
            key={item.id}
            title={item.title}
            quantity={item.quantity}
          />
        )
      })}
      <Foot>
        <div>
          <span>Total:</span>
          <Price>${totalPrice}</Price>
        </div>
          <Button>Purchase</Button>
      </Foot>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  background-color: rgb(64, 31, 67);
  height: 100vh;
  width: 100%;
  color: white;
`;

const Head = styled.div`
  padding-left: 30px;
  padding-top: 20px;
`;

const LightText = styled.span`
  color: lightgray;
`;

const Foot = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 90%;
  bottom: 80px;
  left: 30px;

  span {
    font-size: 1.4em;
  }
`;

const Price = styled.span`
  margin-left: 20px;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: white;
  background-color: rgb(255, 64, 110);
  padding: 10px 40px;
`;

export default Cart;
