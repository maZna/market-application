import styled from "styled-components";
import { PriceTag, CustomizedScrollBox } from "../../styles/index";

/**@component */
export const CartCard = styled(CustomizedScrollBox)`
  border: ${(props) => (props.mobile ? 0 : 8)}px solid
    ${(props) => props.theme.main};
  border-radius: 2px;
  background-color: white;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: inherit;
  height: auto;
  max-height: 300px;
  overflow: auto;
`;

/**@component */
export const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/**@component */
export const Total = styled.div`
  padding: 12px 15px 12px 15px;
  margin-top: 10px;
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 2px;
  display: inline-block;
  background: none;
`;

/**@component */
export const CartInfo = styled(PriceTag)`
  display: flex;
  justify-content: center;
`;