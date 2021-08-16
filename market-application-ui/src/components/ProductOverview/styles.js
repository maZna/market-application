import styled from "styled-components";

/**@component */
export const ProductsTitle = styled.div`
  color: #6f6f6f;
  font-size: 20px;
`;

/**@component */
export const Tab = styled.div`
  button {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    border-radius: 3px;
    transition: 0.2s;
  }
  button:hover {
    background-color: #ddd;
  }
  button.active {
    color: white;
    background-color: ${(props) => props.theme.main};
  }
`;