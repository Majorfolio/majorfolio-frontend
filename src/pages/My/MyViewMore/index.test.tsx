import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Slide } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import MyViewMore from '.';
import {
  StyledToastContainer,
  StyledToastContainerWithBottomNavigation,
} from '../../RootContainer/index.styles';

describe('<MyViewMore />', () => {
  it('should render <Toast /> on sign out', async () => {
    render(
      <MemoryRouter>
        <MyViewMore />
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

    const signoutButton = screen.getByRole('button', { name: '로그아웃' });
    await userEvent.click(signoutButton);

    const toast = screen.findByRole('alert', { name: '로그아웃' });
    expect(toast).toBeInTheDocument();
  });

  it('should render <Toast /> on account delete', async () => {
    render(
      <MemoryRouter>
        <MyViewMore />
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

    const deleteAccountButton = screen.getByRole('button', {
      name: '회원탈퇴',
    });
    await userEvent.click(deleteAccountButton);

    const toast = screen.findByRole('alert', { name: '탈퇴' });
    expect(toast).toBeInTheDocument();
  });
});
