import { Input, Form, Button, Menu } from "antd";
import styled from "styled-components";

const { Item } = Form;

export const CustomItem = styled(Item)`
  margin: 0;

  & .ant-form-item-label {
    margin: 0;
    padding: 0;
  }
`;

export const StyledInput = styled(Input)`
  padding: 0.625rem 1rem;
  width: 100%;
  outline: none;
  border-width: 2px;
  border-radius: 6px;
  font-weight: 500;
  color: #0178ff;

  &:focus {
    border-color: #0178ff;
    color: #0178ff;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.bg ? "#DA292E" : "#0178ffA9")};
  cursor: pointer;
  color: ${(props) => props.color};
  outline: none;
  height: 40px;
  font-weight: 500;

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
    color: gray;
  }

  &:hover {
    background-color: #0178ff;
    border-color: #0178ff;
    color: white;
  }

  &:focus {
    border-color: #0178ff;
    background-color: #0178ff;
    color: white;
    
    &:active {
      border-color: #0178ff;
      background-color: #0178ff;
      color: white;
    }
  }
`;

export const CustomMenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;
