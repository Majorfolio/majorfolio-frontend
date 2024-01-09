import styled from "styled-components";

export const PreviewWrapper = styled.div`
  height: 200px;
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PreviewButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 8px 20px;
  display: flex;
  background: #4B535A; 
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.20px;
  word-wrap: break-word;
  &:hover {
    cursor: pointer;
  }
`;