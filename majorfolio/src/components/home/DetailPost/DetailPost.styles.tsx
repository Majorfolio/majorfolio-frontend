import styled from "styled-components";

export const PostWrapper = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostTitle = styled.span`
  color: #232629;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;

export const TagWrapper = styled.span`
  position: absolute;
  display: flex;
  top: 23px;
  right: 20px;
`;

export const PostContent = styled.div`
  color: #232629;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.40px;
  word-wrap: break-word;
`;