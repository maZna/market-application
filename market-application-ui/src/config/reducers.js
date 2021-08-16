import itemReducer from "../containers/MainContainer/redux/reducer";
import testReducer from "../containers/TestContainer/redux/reducer";

// Collect all reducers in this file with a key
const reducerMap = { itemState: itemReducer, testState: testReducer };

export default reducerMap;
