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

export const StyledUploadActionButton = styled(StyledUploadBaseButton)<{
  hasFile: boolean;
}>`
  position: relative;
  height: 320px;
  background-color: ${({ hasFile }) =>
    hasFile && theme.color['sub_color/indigo/c']};
  border: 1px dashed ${theme.color['main_color/blue_p']};
`;

export const StyledUploadTextSection = styled.span<{
  hasFile: boolean;
}>`
  && ${StyledText} {
    color: ${theme.color['main_color/blue_p']};
    text-align: center;
  }
`;

export const StyledFileInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  cursor: pointer;
`;
