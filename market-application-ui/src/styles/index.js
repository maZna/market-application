import styled from "styled-components";

export const FilterTag = styled.span`
  font-size: 12px;
  color: #697488;
  font-weight: bold;
`;

export const PriceTag = styled.div`
  color: ${(props) => props.theme.main};
  margin: 2px 0 2px 0;
  font-weight: bold;
`;

export const SizedBox = styled.div`
  height: ${(props) => (props?.height ? props?.height : 0)}px;
  width: ${(props) => (props?.width ? props?.width : 0)}px;
`;

export const HorizontallyStraightBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const PageButton = styled.button`
  background: none;
  color: ${(props) => props.theme.main};
  border: none;
  font-family: OpenSansReg;
  outline: none;
  cursor: pointer;
  padding: 12px 12px;
  margin-bottom: 10px;
  border-radius: 3px;
  transition: 0.2s;
  font-weight: 600;
  &:hover {
    background-color: #ddd;
  }
  &.active {
    background-color: ${(props) => props.theme.main};
    color: white;
  }
  &.dis:hover {
    background: none;
  }
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 600;
  width: ${(props) => props.width}
  border: 2px solid ${(props) => props.theme.main};
  border-radius: 5px;
  background: white;
  padding: 10px;
  main {
    display: flex;
    justify-content: flex-start;
  }
  header {
    font-weight: 700;
  }
  footer {
    display: flex;
    justify-content: center;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 500;
  width: 100%;
  display: flex;
  flex-flow: column;
  background-color: black;
  opacity: 0.5;
`;

export const Dropdown = styled.div`
  display: inline-block;
  div {
    display: none;
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
  }
  &:hover div {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomizedScrollBox = styled.div`
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #grey;
  }
  &::-webkit-scrollbar {
    width: 12px;
    width: 5px;
    background-color: #grey;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e0e0e0;
  }
`;
