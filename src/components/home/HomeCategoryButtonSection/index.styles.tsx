import styled from "styled-components";

export const CategoryButtonsWrapper = styled.div`
  padding: 20px 12px;
  display: flex;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  /* &:checked {
    background-color: #4340DB;
  } */
`;

export const ButtonIconWrapper = styled.label`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
`;

export const ButtonText = styled.label`
  margin-top: 6px;
  color: #767D86;
  font-size: 12px;
  font-weight: 500;
  line-height: 14.40px;
  word-wrap: break-word;
  text-align: center;

  /* ${CustomRadioInput}:checked {
    color: #4340DB;
    font-weight: 700;
  } */
`;