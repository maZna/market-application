import React, { useState } from "react";
import { FilterTag } from "../../styles/index";
import Card from "../Card";
import styled from "styled-components";
import {
  SizedBox,
  HorizontallyStraightBox,
  CustomizedScrollBox,
} from "../../styles/index";

const FixedHeightBox = styled(CustomizedScrollBox)`
  max-height: 100px;
  min-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const StyledInput = styled.input.attrs({
  type: "text",
})`
  width: 97%;
  height: 40px;
  text-indent: 10px;
  border: 2px solid #e0e0e0;
  &:focus {
    outline: none;
  }
`;

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
                  <input
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

export default CategorySelector;
