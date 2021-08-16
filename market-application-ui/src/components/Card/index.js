import React from "react";
import styled from "styled-components";
const CustomBox = styled.div`
  border: none;
  border-radius: 2px;
  background-color: white;
  padding: 15px;
  margin-top: 10px;
  width: inherit;
  height: auto;
`;

function Card(props) {
  return (
    <div>
      <CustomBox>{props.children}</CustomBox>
    </div>
  );
}

export default Card;
