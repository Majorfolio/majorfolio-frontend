import React from 'react';
import { getByText, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Slide } from 'react-toastify';
import UploadCollectPhoneNumberStep from '.';
import useAuthStore from '../../../store/useAuthStore';
import Upload from '..';
import {
  StyledToastContainer,
  StyledToastContainerWithBottomNavigation,
} from '../../RootContainer/index.styles';

describe('<UploadCollectPhoneNumberStep/>', () => {
  it('should render <Toast/> on contact submit', async () => {
    render(
      <MemoryRouter>
        <UploadCollectPhoneNumberStep />
        <StyledToastContainer
          containerId="with-bottom-bar"
          closeButton={false}
          icon={false}
          hideProgressBar
          autoClose={999999}
          limit={1}
          transition={Slide}
          draggable
          position="bottom-center"
        />
        <StyledToastContainerWithBottomNavigation
          containerId="without-bottom-bar"
          closeButton={false}
          icon={false}
          hideProgressBar
          autoClose={999999}
          limit={1}
          transition={Slide}
          draggable
          position="bottom-center"
        />
      </MemoryRouter>,
    );
    const phoneNumberInput = screen.getByPlaceholderText(/전화번호/);
    expect(phoneNumberInput).toBeInTheDocument();
    await userEvent.type(phoneNumberInput, '01012345678');

    const submitButton = screen.getByRole('button', { name: '저장하기' });
    expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);
    const toast = await screen.findByText(/전화번호가 저장되었어요./);
    expect(toast).toBeInTheDocument();
  });
});
