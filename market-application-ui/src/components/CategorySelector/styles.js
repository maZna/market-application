import styled from "styled-components";
import { CustomizedScrollBox } from "../../styles/index";

/**@component */
export const FixedHeightBox = styled(CustomizedScrollBox)`
  max-height: 100px;
  min-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
`;

/**@component */
export const StyledInput = styled.input.attrs({
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

export const CustomRadioInput = styled.input.attrs({
  type: "radio",
})``;

export const CustomRadio = styled.div`
  display: inline-block;
  ${CustomRadioInput} {
    display: none;
    background-color: #fff;
  }
  ${CustomRadioInput} + label span {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: -1px 4px 0 0;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid;
    border-color: lightgray;
    background-position: center;
    text-align: center;
    line-height: 17px;
  }
  ${CustomRadioInput} + label span img {
    opacity: 0;
    transition: all 0.3s ease;
  }
  ${CustomRadioInput}:checked + label span img {
    opacity: 2;
    border-color: #1fa4ce;
  }
  ${CustomRadioInput}:checked + label span {
    opacity: 2;
    border-color: #1fa4ce;
  }
`;
