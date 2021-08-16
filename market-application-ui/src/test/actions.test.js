import { loadItems } from "../containers/MainContainer/redux/actions";
import { LOAD_ITEMS } from "../containers/MainContainer/redux/constants";

const expectedloadItemsAction = {
  type: LOAD_ITEMS,
  itemType: "mug",
  page: 1,
  sortProperty: "price",
  sortDirection: "asc",
  brandFilters: [],
  tagFilters: [],
};

describe("Redux actions test", () => {
  it("Should load actions correctly", () => {
    expect(loadItems("mug", 1, "price", "asc", [], [])).toEqual(
      expectedloadItemsAction
    );
  });
});
