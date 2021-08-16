import styled from "styled-components";
import { PageButton } from "../../styles/index";

/**@component */
export const ItemBox = styled.div`
  margin: 2px;
  padding: 2px;
  display: flex;
  justify-content: space-between;
`;

/**@component */
export const CartButton = styled(PageButton)`
  padding: 6px 12px;
  border-radius: 0px;
`;

/**@component */
export const Divider = styled.hr`
  border: 1px solid #f4f4f4;
`;

/**@component */
export const CartButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;
