import React from "react";
import Card from "../Card";
import {
  FilterTag,
  SizedBox,
  HorizontallyStraightBox,
} from "../../styles/index";
import { SORT_DIRECTIONS, SORT_PROPERTIES } from "../../utils/enums";

function SortSelector({
  sortProperty,
  sortDirection,
  setSortProperties,
  mobile,
}) {
  return (
    <div>
      {!mobile ? <FilterTag>Sorting</FilterTag> : null}
      <Card>
        <HorizontallyStraightBox>
          <input
            id="lowToHigh"
            type="radio"
            name={!mobile ? "sorter" : "sorterMobile"}
            checked={
              sortProperty === SORT_PROPERTIES.PRICE &&
              sortDirection === SORT_DIRECTIONS.ASC
            }
            onChange={() =>
              setSortProperties(SORT_PROPERTIES.PRICE, SORT_DIRECTIONS.ASC)
            }
          />
          &nbsp;&nbsp;
          <label htmlFor="lowToHigh">Price low to high</label>
        </HorizontallyStraightBox>
        <SizedBox height={10} />
        <HorizontallyStraightBox>
          <input
            id="highToLow"
            type="radio"
            name={!mobile ? "sorter" : "sorterMobile"}
            checked={
              sortProperty === SORT_PROPERTIES.PRICE &&
              sortDirection === SORT_DIRECTIONS.DESC
            }
            onChange={() =>
              setSortProperties(SORT_PROPERTIES.PRICE, SORT_DIRECTIONS.DESC)
            }
          />
          &nbsp;&nbsp;
          <label htmlFor="highToLow">Price high to low</label>
        </HorizontallyStraightBox>
        <SizedBox height={10} />
        <HorizontallyStraightBox>
          <input
            id="newToOld"
            type="radio"
            name={!mobile ? "sorter" : "sorterMobile"}
            checked={
              sortProperty === SORT_PROPERTIES.ADDED &&
              sortDirection === SORT_DIRECTIONS.ASC
            }
            onChange={() =>
              setSortProperties(SORT_PROPERTIES.ADDED, SORT_DIRECTIONS.ASC)
            }
          />
          &nbsp;&nbsp;
          <label htmlFor="newToOld">New to old</label>
        </HorizontallyStraightBox>
        <SizedBox height={10} />
        <HorizontallyStraightBox>
          <input
            id="oldToNew"
            type="radio"
            name={!mobile ? "sorter" : "sorterMobile"}
            checked={
              sortProperty === SORT_PROPERTIES.ADDED &&
              sortDirection === SORT_DIRECTIONS.DESC
            }
            onChange={() =>
              setSortProperties(SORT_PROPERTIES.ADDED, SORT_DIRECTIONS.DESC)
            }
          />
          &nbsp;&nbsp;
          <label htmlFor="oldToNew">Old to new</label>
        </HorizontallyStraightBox>
      </Card>
    </div>
  );
}

export default SortSelector;
