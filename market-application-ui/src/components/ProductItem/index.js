import React from "react";
import PropTypes from "prop-types";
import {
  AddProductButton,
  CustomSizedBox,
  FlexDivider,
  PictureFrame,
  PictureTemplate,
  ProductTitle,
} from "./style";
import { PriceTag } from "../../styles/index";

/**
 * This component defined the view for a single product item in the product list
 */
function ProductItem({ img, price, title, addToCart, addedToCart }) {
  return (
    <CustomSizedBox width={130} height={235}>
      <FlexDivider>
        <div>
          <PictureFrame>
            <PictureTemplate>
              <img src={img} alt="mug" />
            </PictureTemplate>
          </PictureFrame>
          <PriceTag>₺ {price}</PriceTag>
          <ProductTitle>{title}</ProductTitle>
        </div>
        <AddProductButton
          onClick={addToCart}
          disabled={addedToCart}
          className={addedToCart ? "added" : null}
        >
          {addedToCart ? "Added" : "Add"}
        </AddProductButton>
      </FlexDivider>
    </CustomSizedBox>
  );
}

ProductItem.propTypes = {
  /** Price of current product*/
  price: PropTypes.number,
  /** Title of product*/
  title: PropTypes.string,
  /** Function to add product to cart*/
  addToCart: PropTypes.func,
  /** Whether item is already present in cart*/
  addedToCart: PropTypes.bool,
};

export default ProductItem;
