import styled from "styled-components";
import { PageButton } from '../../styles/index';

/**@component */
export const PaginatorContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-around;
`;

/**@component */
export const SlideButton = styled(PageButton)`
  padding: 6px 6px;
  &.first {
    color: grey;
  }
  &.first:hover {
    background: none
  }
  &.last {
    color: grey;
  }
  &.last:hover {
    background: none
  }
`;
