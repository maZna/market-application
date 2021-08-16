import React from "react";
import styled from "styled-components";
import CartItem from "../CartItem";
import { PriceTag, CustomizedScrollBox } from "../../styles/index";
import { CART_ACTIONS } from "../../utils/enums";

const CartCard = styled(CustomizedScrollBox)`
  border: ${(props) => (props.mobile ? 0 : 8)}px solid
    ${(props) => props.theme.main};
  border-radius: 2px;
  background-color: white;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: inherit;
  height: auto;
  max-height: 300px;
  overflow: auto;
  box-shadow: 5px 5px 8px -12px #000000;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Total = styled.div`
  padding: 12px 15px 12px 15px;
  margin-top: 10px;
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 2px;
  display: inline-block;
  background: none;
`;

const CartInfo = styled(PriceTag)`
  display: flex;
  justify-content: center;
`;

function Cart({ cartItems, updateCart, cartTotal, mobile }) {
  const addToCart = (id) => updateCart({ id }, CART_ACTIONS.ADD);
  const removeFromCart = (id) => updateCart({ id }, CART_ACTIONS.REMOVE);

  return (
    <div>
      <CartCard mobile={mobile}>
        {cartItems.length !== 0 ? (
          cartItems?.map((cartItem) => (
            <CartItem
              key={cartItem?.id}
              id={cartItem?.id}
              price={cartItem.price}
              title={cartItem?.name}
              quantity={cartItem.quantity}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))
        ) : (
          <CartInfo>Cart is empty!</CartInfo>
        )}
        <TotalContainer>
          <Total>
            <PriceTag>₺ {cartTotal}</PriceTag>
          </Total>
        </TotalContainer>
      </CartCard>
    </div>
  );
}

export default Cart;
