import React from "react";
import PropTypes from "prop-types";
import { CartButton, CartButtonGroup, Divider, ItemBox } from "./styles";
import { PriceTag, SizedBox } from "../../styles/index";

/**
 * This represents a single cart item view
 */
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

CartItem.propTypes = {
  /** Price of item */
  price: PropTypes.number,
  /** Title of item*/
  title: PropTypes.string,
  /** Number of items in cart */
  quantity: PropTypes.number,
  /** Id of item */
  id: PropTypes.string,
  /** Function to add more of this item in cart */
  addToCart: PropTypes.func,
  /** Function to remove number of this item in cart */
  removeFromCart: PropTypes.func,
};

export default CartItem;
