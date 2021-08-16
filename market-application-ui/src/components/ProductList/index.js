import React from "react";
import styled from "styled-components";
import ProductItem from "../ProductItem";
import { splitIntoChunks } from "../../utils/helper";
import { CART_ACTIONS } from "../../utils/enums";

const ListGrid = styled.div`
  display: block;
`;

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  width: inherit;
`;

const MAX_ITEMS_PER_ROW = 4;

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
      {splitIntoChunks(itemList, MAX_ITEMS_PER_ROW).map((row, rowIndex) => (
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
      ))}
    </ListGrid>
  );
}

export default ProductList;
