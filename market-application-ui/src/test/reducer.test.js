import {
  LOAD_ITEMS,
  SET_CART_ITEMS,
} from "../containers/MainContainer/redux/constants";
import { CART_ACTIONS } from "../utils/enums";
import reducer from "../containers/MainContainer/redux/reducer";

describe("Reducer test", () => {
  it("Should return initial state", () => {
    expect(reducer({}, { type: undefined })).toEqual({});
  });

  it("Should add itemData, currentCategory, and itemLoading", () => {
    expect(reducer({}, { type: LOAD_ITEMS, itemType: "mug" })).toEqual({
      itemData: {
        itemList: null,
        pageCount: null,
      },
      currentCategory: "mug",
      itemLoading: true,
    });
  });

  it("Should correctly update cartItems and total for empty cart", () => {
    expect(
      reducer(
        {
          itemData: {
            itemList: [
              {
                slug: "test-item",
              },
            ],
            pageCount: 1,
          },
          cartItems: [],
          cartTotal: 0,
        },
        {
          type: SET_CART_ITEMS,
          cartItem: {
            id: "test-item",
            name: "Test Item",
            price: 10.99,
            subtotal: 10.99,
            quantity: 1,
          },
          cartAction: CART_ACTIONS.ADD,
        }
      )
    ).toEqual({
      itemData: {
        itemList: [
          {
            slug: "test-item",
            addedToCart: true,
          },
        ],
        pageCount: 1,
      },
      cartTotal: 10.99,
      cartItems: [
        {
          id: "test-item",
          name: "Test Item",
          price: 10.99,
          subtotal: 10.99,
          quantity: 1,
        },
      ],
    });
  });
});
