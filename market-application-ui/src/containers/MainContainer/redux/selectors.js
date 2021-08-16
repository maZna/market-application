import { createSelector } from "reselect";
import { initialState } from "./reducer";

const itemDataState = (state) => state.itemState || initialState;

const makeSelectItemData = () =>
  createSelector(itemDataState, (state) => state.itemData);

const makeSelectItemDataLoading = () =>
  createSelector(itemDataState, (state) => state.itemLoading);

const makeSelectItemDataError = () =>
  createSelector(itemDataState, (state) => state.itemError);

const makeSelectCompanyData = () =>
  createSelector(itemDataState, (state) => state.companyData);

const makeSelectCompanyDataLoading = () =>
  createSelector(itemDataState, (state) => state.companyLoading);

const makeSelectCompanyDataError = () =>
  createSelector(itemDataState, (state) => state.companyError);

const makeSelectTagData = () =>
  createSelector(itemDataState, (state) => state.tagData);

const makeSelectTagDataLoading = () =>
  createSelector(itemDataState, (state) => state.tagLoading);

const makeSelectTagDataError = () =>
  createSelector(itemDataState, (state) => state.tagError);

const makeSelectCurrentPage = () =>
  createSelector(itemDataState, (state) => state.currentPage);

const makeSelectCurrentCategory = () =>
  createSelector(itemDataState, (state) => state.currentCategory);

const makeSelectSortProperty = () =>
  createSelector(itemDataState, (state) => state.sortProperty);

const makeSelectSortDirection = () =>
  createSelector(itemDataState, (state) => state.sortDirection);

const makeSelectBrandFilters = () =>
  createSelector(itemDataState, (state) => state.brandFilters);

const makeSelectTagFilters = () =>
  createSelector(itemDataState, (state) => state.tagFilters);

const makeSelectCartItems = () =>
  createSelector(itemDataState, (state) => state.cartItems);

const makeSelectCartTotal = () =>
  createSelector(itemDataState, (state) => state.cartTotal);

export {
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
};
