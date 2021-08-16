import styled from "styled-components";
import { SizedBox } from "../../styles/index";

/**@component */
export const PictureFrame = styled.div`
  padding: 15px;
  margin: 5px 0 5px 0;
  border: 2px solid ${(props) => props.theme.secondary};
  border-radius: 10px;
`;

/**@component */
export const PictureTemplate = styled.div`
  width: 97px;
  height: 100px;
  & img {
    width: inherit;
    height: inherit;
  }
`;

/**@component */
export const ProductTitle = styled.div`
  color: #191919;
  margin: 2px 0 2px 0;
  font-family: OpenSansBold;
`;

export const AddProductButton = styled.button`
  background-color: ${(props) => props.theme.main};
  width: inherit;
  padding: 3px 0 3px 0;
  margin: 5px 0 5px 0;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  transition: 0.2s;
  &:hover {
    background-color: #1f6880;
  }
  &.added {
    color: ${(props) => props.theme.secondary};
    background-color: #c4c4c4;
  }
`;

export const CustomSizedBox = styled(SizedBox)`
  margin-left: 11px;
  margin-right: 11px;
`;

export const FlexDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
`;
