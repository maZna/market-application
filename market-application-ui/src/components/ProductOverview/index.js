import React from "react";
import PropTypes from "prop-types";
import { PRODUCT_CATEGORIES } from "../../utils/enums";
import Card from "../Card";
import ProductList from "../ProductList";
import { ProductsTitle, Tab } from "./styles";

/**
 * This component controls the display of product items and their types 
 */
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

ProductOverview.propTypes = {
  /** List of available product items*/
  productList: PropTypes.array,
  /** Category of products (shirt/mug)*/
  productCategory: PropTypes.string,
  /** Switch category to shirts*/
  setCategoryAsShirts: PropTypes.func,
  /** Switch category to mugs*/
  setCategoryAsMugs: PropTypes.func,
  /** Function to update cart items*/
  updateCart: PropTypes.func,
};

export default ProductOverview;
