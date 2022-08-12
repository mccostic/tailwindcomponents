import { Input, Form, Button } from "antd";
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
    border-color:#0178ff;
  }

  &:hover {
    border-color:#0178ff;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background-color: #0178ff;
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
  }
`;
