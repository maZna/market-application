import produce from "immer";
import {
  TEST_ACTION,
  TEST_ACTION_FAILURE,
  TEST_ACTION_SUCCESS,
} from "./constants";

export const initialState = {
  data: null,
  dataLoading: false,
  dataError: null,
};

const testReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case TEST_ACTION:
        draft.data = null;
        draft.dataLoading = true;
        break;
      case TEST_ACTION_SUCCESS:
          draft.data = action.data;
          draft.dataLoading = false;
        break;
      case TEST_ACTION_FAILURE:
          draft.dataError = action.error
          draft.dataLoading = false;
        break;
      default:
    }
  });

export default testReducer;
