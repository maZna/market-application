import React from "react";
import styled from "styled-components";
import { PRODUCT_CATEGORIES } from "../../utils/enums";
import Card from "../Card";
import ProductList from "../ProductList";

const ProductsTitle = styled.div`
  color: #6f6f6f;
  font-size: 20px;
`;

const Tab = styled.div`
  button {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 3px;
    transition: 0.2s;
  }
  button:hover {
    background-color: #ddd;
  }
  button.active {
    color: white;
    background-color: ${(props) => props.theme.main};
  }
`;

function ProductOverview({
  productList,
  productCategory,
  setCategoryAsShirts,
  setCategoryAsMugs,
  updateCart,
}) {
  return (
    <div>
      <ProductsTitle>Products</ProductsTitle>
      <Tab>
        <button
          className={
            productCategory === PRODUCT_CATEGORIES.MUG ? "active" : null
          }
          onClick={setCategoryAsMugs}
        >
          mug
        </button>
        <button
          className={
            productCategory === PRODUCT_CATEGORIES.SHIRT ? "active" : null
          }
          onClick={setCategoryAsShirts}
        >
          shirt
        </button>
      </Tab>
      <Card>
        <ProductList itemList={productList} updateCart={updateCart} />
      </Card>
    </div>
  );
}

export default ProductOverview;
