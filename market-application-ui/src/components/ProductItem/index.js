import React from "react";
import {
  AddProductButton,
  CustomSizedBox,
  FlexDivider,
  PictureFrame,
  PictureTemplate,
  ProductTitle,
} from "./style";
import { PriceTag } from "../../styles/index";

function ProductItem({ price, title, addToCart, addedToCart }) {
  return (
    <CustomSizedBox width={130} height={235}>
      <FlexDivider>
        <div>
          <PictureFrame>
            <PictureTemplate />
          </PictureFrame>
          <PriceTag>₺ {price}</PriceTag>
          <ProductTitle>{title}</ProductTitle>
        </div>
        <AddProductButton onClick={addToCart}>
          {addedToCart ? "Added" : "Add"}
        </AddProductButton>
      </FlexDivider>
    </CustomSizedBox>
  );
}

export default ProductItem;
