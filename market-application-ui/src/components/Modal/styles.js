import { PageButton } from "../../styles/index";
import styled from "styled-components";

/**@component */
export const ModalButton = styled(PageButton)`
  background-color: ${(props) => props.theme.main};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;
