import {
  TEST_ACTION,
  TEST_ACTION_SUCCESS,
  TEST_ACTION_FAILURE,
} from "./constants";

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}

export function testActionSuccess(data) {
  return {
    type: TEST_ACTION_SUCCESS,
    data,
  };
}

export function testActionFailure(error) {
  return {
    type: TEST_ACTION_FAILURE,
    error,
  };
}
