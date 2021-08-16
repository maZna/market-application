import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import {
  FilterTag,
  SizedBox,
  HorizontallyStraightBox,
} from "../../styles/index";
import { SORT_DIRECTIONS, SORT_PROPERTIES } from "../../utils/enums";
import CustomRadio from "../CustomRadio";

/**
 * This component allows users to select the sorting type and order for the items
 */
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
          <CustomRadio
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
          <CustomRadio
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
          <CustomRadio
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
          <CustomRadio
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

SortSelector.propTypes = {
  /** Determines which property to sort items by (price/date added)*/
  sortProperty: PropTypes.string,
  /** Determines direction of sorting (asc/desc)*/
  sortDirection: PropTypes.string,
  /** Function to update existing sort properties*/
  setSortProperties: PropTypes.func,
  /** Whether it should be a mobile/desktop view*/
  mobile: PropTypes.bool,
};

export default SortSelector;
