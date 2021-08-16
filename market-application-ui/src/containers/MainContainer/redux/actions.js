import {
  LOAD_ITEMS,
  LOAD_ITEMS_FAILURE,
  LOAD_ITEMS_SUCCESS,
  LOAD_COMPANIES,
  LOAD_COMPANIES_FAILURE,
  LOAD_COMPANIES_SUCCESS,
  SET_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SORT_PROPERTIES,
  SET_BRAND_FILTERS,
  LOAD_TAGS,
  LOAD_TAGS_FAILURE,
  LOAD_TAGS_SUCCESS,
  SET_TAG_FILTERS,
  SET_CART_ITEMS,
} from "./constants";

export function loadItems(
  itemType,
  page,
  sortProperty,
  sortDirection,
  brandFilters,
  tagFilters
) {
  return {
    type: LOAD_ITEMS,
    itemType,
    page,
    sortProperty,
    sortDirection,
    brandFilters,
    tagFilters,
  };
}

export function loadItemsSuccess(itemResult, totalPages) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    itemResult,
    totalPages,
  };
}

export function loadItemsFailure(error) {
  return {
    type: LOAD_ITEMS_FAILURE,
    error,
  };
}

export function loadCompanies() {
  return {
    type: LOAD_COMPANIES,
  };
}

export function loadCompaniesSuccess(companyResult) {
  return {
    type: LOAD_COMPANIES_SUCCESS,
    companyResult,
  };
}

export function loadCompaniesFailure(error) {
  return {
    type: LOAD_COMPANIES_FAILURE,
    error,
  };
}

export function loadTags() {
  return {
    type: LOAD_TAGS,
  };
}

export function loadTagsSuccess(tagResult) {
  return {
    type: LOAD_TAGS_SUCCESS,
    tagResult,
  };
}

export function loadTagsFailure(error) {
  return {
    type: LOAD_TAGS_FAILURE,
    error,
  };
}

export function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function setSortProperties(sortProperty, sortDirection) {
  return {
    type: SET_SORT_PROPERTIES,
    sortProperty,
    sortDirection,
  };
}

export function setBrandFilters(filters) {
  return {
    type: SET_BRAND_FILTERS,
    filters,
  };
}

export function setTagFilters(filters) {
  return {
    type: SET_TAG_FILTERS,
    filters,
  };
}

export function setCartItems(cartItem, cartAction) {
  return {
    type: SET_CART_ITEMS,
    cartItem,
    cartAction,
  };
}
