import styled from "styled-components";
import theme from "../../common/theme";

export const CategoryButtonsWrapper = styled.div`
  background-color: ${ theme.color['gray/white'] };
  padding: 20px 12px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CustomRadioInput = styled.input`
  width: 52px;
  height: 52px;
  padding: 12px;
  margin: 0;
  appearance: none;
  border-radius: 100px;
  background: #EBEEF2;
  display: flex;
  align-items: center;
  background: ${(props) => (props.checked ? '#4340DB' : '#EBEEF2')};
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonIconWrapper = styled.label`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonText = styled.span`
  margin-top: 6px;
`;