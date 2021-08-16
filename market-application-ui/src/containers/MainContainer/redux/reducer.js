import produce from "immer";
import {
  CART_ACTIONS,
  PRODUCT_CATEGORIES,
  SORT_DIRECTIONS,
  SORT_PROPERTIES,
} from "../../../utils/enums";
import {
  LOAD_COMPANIES,
  LOAD_COMPANIES_FAILURE,
  LOAD_COMPANIES_SUCCESS,
  LOAD_ITEMS,
  LOAD_ITEMS_FAILURE,
  LOAD_ITEMS_SUCCESS,
  LOAD_TAGS,
  LOAD_TAGS_FAILURE,
  LOAD_TAGS_SUCCESS,
  SET_BRAND_FILTERS,
  SET_CART_ITEMS,
  SET_CATEGORY,
  SET_CURRENT_PAGE,
  SET_SORT_PROPERTIES,
  SET_TAG_FILTERS,
} from "./constants";
import { getRandomMug, getRandomShirt } from "../../../resources/img/img";

export const initialState = {
  itemData: null,
  itemLoading: false,
  itemError: null,
  companyData: null,
  companyLoading: false,
  companyError: null,
  tagData: null,
  tagLoading: false,
  tagError: null,
  currentPage: 1,
  currentCategory: null,
  sortProperty: SORT_PROPERTIES.PRICE,
  sortDirection: SORT_DIRECTIONS.ASC,
  brandFilters: [],
  tagFilters: [],
  cartItems: [],
  cartTotal: 0,
};

const itemReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ITEMS:
        draft.itemData = {
          itemList: null,
          pageCount: null,
        };
        draft.currentCategory = action.itemType;
        draft.itemLoading = true;
        break;
      case LOAD_ITEMS_SUCCESS:
        draft.itemData = {
          itemList: action.itemResult.map((item) => ({
            ...item,
            // arbitrary logic for generating image template
            img:
              item.itemType === PRODUCT_CATEGORIES.MUG
                ? getRandomMug(item.tags.length)
                : getRandomShirt(item.tags.length),
          })),
          pageCount: action.totalPages,
        };

        // Add/Remove 'added' flag to cart items
        const loadedItems = [...draft.itemData.itemList];
        const updatedLoadedItems = loadedItems.map((item) => {
          if (draft.cartItems.findIndex((e) => e.id === item.slug) >= 0) {
            return {
              ...item,
              addedToCart: true,
            };
          } else if (item.addedToCart) {
            return {
              ...item,
              addedToCart: false,
            };
          }
          return item;
        });
        draft.itemData = { ...draft.itemData, itemList: updatedLoadedItems };
        draft.itemLoading = false;
        break;
      case LOAD_ITEMS_FAILURE:
        draft.itemError = action.error;
        draft.itemLoading = false;
        break;
      case LOAD_COMPANIES:
        draft.companyData = null;
        draft.companyError = null;
        draft.companyLoading = true;
        break;
      case LOAD_COMPANIES_SUCCESS:
        draft.companyData = action.companyResult;
        draft.companyLoading = false;
        break;
      case LOAD_COMPANIES_FAILURE:
        draft.companyError = action.error;
        draft.companyLoading = false;
        break;
      case LOAD_TAGS:
        draft.tagData = null;
        draft.tagError = null;
        draft.tagLoading = true;
        break;
      case LOAD_TAGS_SUCCESS:
        draft.tagData = action.tagResult;
        draft.tagLoading = false;
        break;
      case LOAD_TAGS_FAILURE:
        draft.tagError = action.error;
        draft.tagLoading = false;
        break;
      case SET_CURRENT_PAGE:
        draft.currentPage = action.page;
        break;
      case SET_CATEGORY:
        draft.currentPage = 1;
        draft.currentCategory = action.category;
        break;
      case SET_SORT_PROPERTIES:
        draft.sortProperty = action.sortProperty;
        draft.sortDirection = action.sortDirection;
        break;
      case SET_BRAND_FILTERS:
        draft.brandFilters = action.filters;
        break;
      case SET_TAG_FILTERS:
        draft.tagFilters = action.filters;
        break;
      case SET_CART_ITEMS:
        // Update cart and cart totals
        const existingProductIndex = state.cartItems.findIndex(
          (item) => item?.id === action.cartItem?.id
        );
        let updatedCartItems = null;
        if (existingProductIndex >= 0) {
          updatedCartItems = [...state.cartItems];
          const updatedQuantity =
            action.cartAction === CART_ACTIONS.ADD
              ? updatedCartItems[existingProductIndex].quantity + 1
              : updatedCartItems[existingProductIndex].quantity - 1;
          if (updatedQuantity === 0) {
            updatedCartItems = updatedCartItems.filter(
              (e) => e.id !== action.cartItem?.id
            );
          } else {
            updatedCartItems[existingProductIndex] = {
              ...updatedCartItems[existingProductIndex],
              quantity: updatedQuantity,
              subtotal:
                updatedCartItems[existingProductIndex].price * updatedQuantity,
            };
          }
        } else {
          updatedCartItems = [...state.cartItems, action.cartItem];
        }
        draft.cartItems = [...updatedCartItems];
        draft.cartTotal = parseFloat(
          draft.cartItems
            .map((item) => item.subtotal)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)
        );

        // Add/Remove 'added' flag to cart items
        const currentItems = [...state.itemData.itemList];
        const updatedItems = currentItems.map((item) => {
          if (draft.cartItems.findIndex((e) => e.id === item.slug) >= 0) {
            return {
              ...item,
              addedToCart: true,
            };
          } else if (item.addedToCart) {
            return {
              ...item,
              addedToCart: false,
            };
          }
          return item;
        });
        draft.itemData = { ...state.itemData, itemList: updatedItems };
        break;
      default:
    }
  });

export default itemReducer;
