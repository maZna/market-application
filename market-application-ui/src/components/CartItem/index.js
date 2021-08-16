import React from "react";
import styled from "styled-components";
import { PriceTag, SizedBox, PageButton } from "../../styles/index";

const ItemBox = styled.div`
  margin: 2px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
`;

const CartButton = styled(PageButton)`
  padding: 6px 12px;
  border-radius: 0px;
`;

const Divider = styled.hr`
  border: 1px solid #f4f4f4;
`;

const CartButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

function CartItem({ price, title, quantity, id, addToCart, removeFromCart }) {
  return (
    <>
      <ItemBox>
        <div
          style={{
            display: "inline-block",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <div>{title}</div>
          <SizedBox height={3} />
          <PriceTag>₺ {price}</PriceTag>
        </div>
        <CartButtonGroup>
          <CartButton onClick={() => removeFromCart(id)}>−</CartButton>
          <CartButton className={"active"}>{quantity}</CartButton>
          <CartButton onClick={() => addToCart(id)}>
            <span>+</span>
          </CartButton>
        </CartButtonGroup>
      </ItemBox>
      <Divider />
    </>
  );
}

export default CartItem;
