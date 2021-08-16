import React from "react";
import PropTypes from "prop-types";
import CartItem from "../CartItem";
import { CART_ACTIONS } from "../../utils/enums";
import { CartCard, CartInfo, Total, TotalContainer } from "./styles";
import { PriceTag } from "../../styles/index";

/**
 * This component represents the Cart view
 */
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

Cart.propTypes = {
  /** List of items present in cart */
  cartItems: PropTypes.array,
  /** Function to add/remove cart items */
  updateCart: PropTypes.func,
  /** Total cost of items in cart*/
  cartTotal: PropTypes.number,
  /** Whether it should be a mobile/desktop view*/
  mobile: PropTypes.bool,
};



export default Cart;
