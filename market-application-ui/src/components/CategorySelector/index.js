import React, { useState } from "react";
import PropTypes from "prop-types";
import { FilterTag } from "../../styles/index";
import Card from "../Card";
import { FixedHeightBox, StyledInput } from "./styles";
import { SizedBox, HorizontallyStraightBox } from "../../styles/index";
import CustomCheckBox from "../CustomCheckBox";

/**
 * This component lets users select the categories of items they wish to see
 */
function CategorySelector({
  categories,
  type,
  title,
  filters,
  updateFilters,
  mobile,
}) {
  const [filterText, setFilterText] = useState("");

  return (
    <div>
      {!mobile ? <FilterTag>{title}</FilterTag> : null}
      <Card>
        <StyledInput
          type="text"
          placeholder={`Search ${type}`}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <br />
        <SizedBox height={10} />
        <FixedHeightBox>
          {categories?.map((item, index) => {
            let checked = false;
            if (filters.length === 0 && index === 0) {
              checked = true;
            } else {
              if (filters.filter((e) => e === item?.slug).length > 0)
                checked = true;
            }
            const category = (
              <div key={item?.name}>
                <HorizontallyStraightBox key={item?.name}>
                  <CustomCheckBox
                    type="checkbox"
                    id={item?.name}
                    checked={checked}
                    disabled={item?.quantity === 0}
                    onChange={(e) => {
                      if (index === 0) {
                        updateFilters([]);
                        return;
                      }
                      let updatedFilters = [...filters];
                      if (e.target.checked) {
                        updatedFilters.push(item?.slug);
                      } else {
                        updatedFilters = updatedFilters.filter(
                          (e) => e !== item?.slug
                        );
                      }
                      updateFilters(updatedFilters);
                    }}
                  />
                  &nbsp;&nbsp;
                  <label htmlFor={item?.name}>
                    {item?.name}&nbsp;
                    <span
                      style={{ color: "grey" }}
                    >{`(${item?.quantity})`}</span>
                  </label>
                  <br />
                </HorizontallyStraightBox>
                <SizedBox height={10} />
              </div>
            );
            if (!filterText) return category;
            if (item?.name?.includes(filterText)) return category;
            return null;
          })}
        </FixedHeightBox>
      </Card>
    </div>
  );
}

CategorySelector.propTypes = {
  /** List categories to select from*/
  categories: PropTypes.array,
  /** Selector type (tag or brand)*/
  type: PropTypes.string,
  /** Title of selector box*/
  title: PropTypes.string,
  /** Existing filters that may have been selected*/
  filters: PropTypes.array,
  /** Function to update filters*/
  updateFilters: PropTypes.func,
  /** Whether it should be a mobile/desktop view*/
  mobile: PropTypes.bool,
};

export default CategorySelector;
