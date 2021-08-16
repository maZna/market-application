import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem";
import { splitIntoChunks } from "../../utils/helper";
import { CART_ACTIONS } from "../../utils/enums";
import { ListGrid, Row } from "./styles";
import { PRODUCT_LIST_MAX_ITEMS_PER_ROW } from "../../utils/constants";

/**
 * This component provides the product list view for loaded items
 */
function ProductList({ itemList, updateCart }) {
  const addToCart = (item) => {
    updateCart(
      {
        id: item.slug,
        name: item.name,
        price: item.price,
        subtotal: item.price,
        quantity: 1,
      },
      CART_ACTIONS.ADD
    );
  };

  return (
    <ListGrid>
      {splitIntoChunks(itemList, PRODUCT_LIST_MAX_ITEMS_PER_ROW).map(
        (row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((col, colIndex) => (
              <ProductItem
                key={colIndex}
                price={col.price}
                title={col.name}
                addedToCart={col?.addedToCart}
                addToCart={() => addToCart(col)}
              />
            ))}
          </Row>
        )
      )}
    </ListGrid>
  );
}

ProductList.propTypes = {
  /** List of available items (for current page)*/
  itemList: PropTypes.array, 
  /** Function to update cart items*/
  updateCart: PropTypes.func, 
};

export default ProductList;
