import React, { memo, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
  makeSelectItemData,
  makeSelectItemDataError,
  makeSelectItemDataLoading,
  makeSelectCompanyData,
  makeSelectCompanyDataLoading,
  makeSelectCompanyDataError,
  makeSelectTagData,
  makeSelectTagDataLoading,
  makeSelectTagDataError,
  makeSelectCurrentPage,
  makeSelectCurrentCategory,
  makeSelectSortProperty,
  makeSelectSortDirection,
  makeSelectBrandFilters,
  makeSelectTagFilters,
  makeSelectCartItems,
  makeSelectCartTotal,
} from "./redux/selectors";
import logos from "../../resources/img/img";
import SortSelector from "../../components/SortSelector/index";
import CategorySelector from "../../components/CategorySelector";
import ProductOverview from "../../components/ProductOverview/index";
import {
  loadItems,
  loadCompanies,
  loadTags,
  setCurrentPage,
  setCategory,
  setSortProperties,
  setBrandFilters,
  setTagFilters,
  setCartItems,
} from "./redux/actions";
import {
  NavBar,
  Total,
  LeftSideBar,
  RightSideBar,
  Main,
  NavPriceTag,
  MobileView,
  SmallDeviceView,
  FilterButton,
  Footer,
} from "./style";
import Loader from "../../components/Loader";
import Paginator from "../../components/Paginator";
import { CATEGORY_TYPES, PRODUCT_CATEGORIES } from "../../utils/enums";
import Cart from "../../components/Cart";
import Modal from "../../components/Modal";
import { useState } from "react";
import { Dropdown } from "../../styles";

function MainContainer({
  itemData,
  itemLoading,
  itemError,
  companyData,
  companyLoading,
  companyError,
  tagData,
  tagLoading,
  tagError,
  currentPage,
  currentCategory,
  sortProperty,
  sortDirection,
  brandFilters,
  tagFilters,
  cartItems,
  cartTotal,
  dispatch,
}) {
  console.log(itemError, companyError, tagError);
  console.log(cartItems, cartTotal);
  console.log(itemData);

  useEffect(() => {
    console.log("First load for items");
    if (!itemData) loadMugs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("First load for companies");
    if (!companyData) dispatch(loadCompanies());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("First load for tags");
    if (!tagData) dispatch(loadTags());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("page/category changed");
    if (itemData?.itemList) {
      if (currentCategory === PRODUCT_CATEGORIES.MUG) loadMugs();
      else if (currentCategory === PRODUCT_CATEGORIES.SHIRT) loadShirts();
    }
  }, [currentCategory, currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("sort prop/dir changed");
    if (itemData?.itemList) {
      dispatch(
        loadItems(
          currentCategory,
          currentPage,
          sortProperty,
          sortDirection,
          brandFilters,
          tagFilters
        )
      );
    }
  }, [sortProperty, sortDirection]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("brand/tag filters changed");
    if (itemData?.itemList) {
      dispatch(
        loadItems(
          currentCategory,
          currentPage,
          sortProperty,
          sortDirection,
          brandFilters,
          tagFilters
        )
      );
    }
  }, [brandFilters, tagFilters]); // eslint-disable-line react-hooks/exhaustive-deps

  const loadMugs = () =>
    dispatch(
      loadItems(
        PRODUCT_CATEGORIES.MUG,
        currentPage,
        sortProperty,
        sortDirection,
        brandFilters,
        tagFilters
      )
    );

  const loadShirts = () =>
    dispatch(
      loadItems(
        PRODUCT_CATEGORIES.SHIRT,
        currentPage,
        sortProperty,
        sortDirection,
        brandFilters,
        tagFilters
      )
    );

  const updateBrandFilters = (newFilters) =>
    dispatch(setBrandFilters(newFilters));

  const updateTagFilters = (newFilters) => dispatch(setTagFilters(newFilters));

  const generateCategoryList = (type) => {
    const dataList =
      type === CATEGORY_TYPES.BRAND
        ? companyData?.companyAmounts
        : tagData?.tags;
    const totalItems =
      type === CATEGORY_TYPES.BRAND
        ? companyData?.totalItems
        : tagData?.totalItems;
    const categoryList = dataList?.map((i) => ({
      key: type === CATEGORY_TYPES.BRAND ? i?.company : i?.tag,
      name: type === CATEGORY_TYPES.BRAND ? i?.company : i?.tag,
      quantity: i?.amount,
      slug: type === CATEGORY_TYPES.BRAND ? i?.slug : i?.tag,
    }));
    categoryList?.unshift({ name: "All", quantity: totalItems });
    return categoryList;
  };

  const setCategoryAsShirts = () =>
    dispatch(setCategory(PRODUCT_CATEGORIES.SHIRT));
  const setCategoryAsMugs = () => dispatch(setCategory(PRODUCT_CATEGORIES.MUG));

  const updatePage = (page) => dispatch(setCurrentPage(page));

  const updateCart = (cartItem, action) =>
    dispatch(setCartItems(cartItem, action));

  const [sortOpen, setSortOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);
  const [tagOpen, setTagOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSort = () => setSortOpen(!sortOpen);
  const toggleBrand = () => setBrandOpen(!brandOpen);
  const toggleTag = () => setTagOpen(!tagOpen);
  const toggleCart = () => setCartOpen(!cartOpen);

  const modals = (
    <>
      <Modal open={sortOpen} toggle={toggleSort} header={"Sort"}>
        <SortSelector
          sortProperty={sortProperty}
          sortDirection={sortDirection}
          setSortProperties={(prop, dir) =>
            dispatch(setSortProperties(prop, dir))
          }
          mobile
        />
      </Modal>
      <Modal open={brandOpen} toggle={toggleBrand} header={"Brands"}>
        <CategorySelector
          categories={generateCategoryList(CATEGORY_TYPES.BRAND)}
          type={CATEGORY_TYPES.BRAND}
          title={"Brands"}
          filters={brandFilters}
          updateFilters={updateBrandFilters}
          mobile
        />
      </Modal>
      <Modal open={tagOpen} toggle={toggleTag} header={"Tags"}>
        <CategorySelector
          categories={generateCategoryList(CATEGORY_TYPES.TAG)}
          type={CATEGORY_TYPES.TAG}
          title={"Tags"}
          filters={tagFilters}
          updateFilters={updateTagFilters}
          mobile
        />
      </Modal>
      <Modal open={cartOpen} toggle={toggleCart} header={"Cart"}>
        <Cart
          cartItems={cartItems}
          updateCart={updateCart}
          cartTotal={cartTotal}
          mobile
        />
      </Modal>
    </>
  );

  return (
    <>
      {itemLoading ? <Loader /> : null}
      {modals}
      <NavBar>
        <img src={logos.marketLogo} alt="market logo" width="100px" />
        <Total>
          <img src={logos.lock} alt="lock" width="20px" height="20px" />
          &nbsp;&nbsp; <NavPriceTag>₺ {cartTotal}</NavPriceTag>
        </Total>
      </NavBar>
      <LeftSideBar>
        <SortSelector
          sortProperty={sortProperty}
          sortDirection={sortDirection}
          setSortProperties={(prop, dir) =>
            dispatch(setSortProperties(prop, dir))
          }
        />
        <br />
        <CategorySelector
          categories={generateCategoryList(CATEGORY_TYPES.BRAND)}
          type={CATEGORY_TYPES.BRAND}
          title={"Brands"}
          filters={brandFilters}
          updateFilters={updateBrandFilters}
        />
        <br />
        <CategorySelector
          categories={generateCategoryList(CATEGORY_TYPES.TAG)}
          type={CATEGORY_TYPES.TAG}
          title={"Tags"}
          filters={tagFilters}
          updateFilters={updateTagFilters}
        />
      </LeftSideBar>
      <Main>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MobileView>
              <Dropdown>
                <FilterButton>Filters</FilterButton>
                <div>
                  <FilterButton onClick={() => setSortOpen(true)}>
                    Sort
                  </FilterButton>
                  &nbsp;
                  <FilterButton onClick={() => setBrandOpen(true)}>
                    Brands
                  </FilterButton>
                  &nbsp;
                  <FilterButton onClick={() => setTagOpen(true)}>
                    Tags
                  </FilterButton>
                </div>
                &nbsp;
              </Dropdown>
            </MobileView>
            <SmallDeviceView>
              <FilterButton onClick={() => setCartOpen(true)}>
                Cart
              </FilterButton>
            </SmallDeviceView>
          </div>
          <ProductOverview
            productList={itemData?.itemList}
            productCategory={currentCategory}
            setCategoryAsShirts={setCategoryAsShirts}
            setCategoryAsMugs={setCategoryAsMugs}
            updateCart={updateCart}
          />
          {itemData?.itemList ? (
            <Paginator
              currentPage={currentPage}
              updatePage={updatePage}
              totalPages={itemData?.pageCount}
            />
          ) : null}
        </div>
      </Main>
      <RightSideBar>
        <Cart
          cartItems={cartItems}
          updateCart={updateCart}
          cartTotal={cartTotal}
        />
      </RightSideBar>
      <Footer>
        Ⓒ 2019 Market&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Privacy Policy
      </Footer>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mapStateToProps = createStructuredSelector({
  itemData: makeSelectItemData(),
  itemLoading: makeSelectItemDataLoading(),
  itemError: makeSelectItemDataError(),
  companyData: makeSelectCompanyData(),
  companyLoading: makeSelectCompanyDataLoading(),
  companyError: makeSelectCompanyDataError(),
  tagData: makeSelectTagData(),
  tagLoading: makeSelectTagDataLoading(),
  tagError: makeSelectTagDataError(),
  currentPage: makeSelectCurrentPage(),
  currentCategory: makeSelectCurrentCategory(),
  sortProperty: makeSelectSortProperty(),
  sortDirection: makeSelectSortDirection(),
  brandFilters: makeSelectBrandFilters(),
  tagFilters: makeSelectTagFilters(),
  cartItems: makeSelectCartItems(),
  cartTotal: makeSelectCartTotal(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(memo, withConnect)(MainContainer);
