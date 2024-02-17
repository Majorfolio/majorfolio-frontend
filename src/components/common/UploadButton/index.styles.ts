import styled from 'styled-components';
import theme from '../theme';
import StyledText from '../Text/index.styles';

const StyledUploadBaseButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  align-items: center;
  background-color: ${theme.color['gray/gray50']};
  border: 1px dashed ${theme.color['gray/gray150']};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  && ${StyledText} {
    color: ${theme.color['gray/gray400']};
  }
`;

export const StyledUploadPreviewButton = styled(StyledUploadBaseButton)`
  height: 104px;
`;

export const StyledUploadActionButton = styled(StyledUploadBaseButton)`
  height: 320px;
`;
