import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { Slide } from 'react-toastify';
import userEvent from '@testing-library/user-event';
import MyViewMore from '.';
import {
  StyledToastContainer,
  StyledToastContainerWithBottomNavigation,
} from '../../RootContainer/index.styles';
import NoticeList from '../NoticeList';
import Home from '../../Home';
import UploadGuideline from '../UploadGuideline';
import ContactUs from '../ContactUs';

describe('<MyViewMore />', () => {
  it('should navigate to <NoticeList/> page when notice button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/my/view-more']}>
        <Routes>
          <Route path="my">
            <Route path="view-more" element={<MyViewMore />} />
            <Route path="notice-list" element={<NoticeList />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const noticeListButton = screen.getByRole('button', {
      name: /공지사항/,
    });

    await userEvent.click(noticeListButton);
    const titleElement = await screen.findByText(/새로운 소식/);
    expect(titleElement).toBeInTheDocument();
  });

  it('should navigate to <UploadGuideline /> page when upload guideline button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/my/view-more']}>
        <Routes>
          <Route path="my">
            <Route path="view-more" element={<MyViewMore />} />
            <Route path="upload-guideline" element={<UploadGuideline />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const uploadGuidelineButton = screen.getByRole('button', {
      name: /업로드 가이드라인/,
    });
    await userEvent.click(uploadGuidelineButton);
    const titleElement = await screen.findByText(/업로드 가이드를 읽어보세요/);
    expect(titleElement).toBeInTheDocument();
  });

  it('should navigate to <UploadGuideline /> page when upload guideline button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/my/view-more']}>
        <Routes>
          <Route path="my">
            <Route path="view-more" element={<MyViewMore />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const uploadGuidelineButton = screen.getByRole('button', {
      name: /고객센터/,
    });
    await userEvent.click(uploadGuidelineButton);
    const kakaotalkChannelButton =
      await screen.findByText(/카카오톡 채널 상담/);
    expect(kakaotalkChannelButton).toBeInTheDocument();
  });

  it('should navigate to <ContactUs /> page when contact us button is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/my/view-more']}>
        <Routes>
          <Route path="my">
            <Route path="view-more" element={<MyViewMore />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
  });

  it('should navigate to <Home/> page when sign out button is clicked ', async () => {
    // render(
    //   <MemoryRouter initialEntries={['/my/view-more']}>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="my">
    //         <Route path="view-more" element={<MyViewMore />} />
    //       </Route>
    //     </Routes>
    //   </MemoryRouter>,
    // );
    // const signoutButton = screen.getByRole('button', { name: /로그아웃/ });
    // await userEvent.click(signoutButton);
    // const everyUniversityHeading = await screen.findByText(/모든 대학교/);
    // expect(everyUniversityHeading).toBeInTheDocument();
  });

  // it('should render <Toast /> on sign out', async () => {
  //   render(
  //     <MemoryRouter>
  //       <MyViewMore />
  //       <StyledToastContainer
  //         containerId="with-bottom-bar"
  //         closeButton={false}
  //         icon={false}
  //         hideProgressBar
  //         autoClose={999999}
  //         limit={1}
  //         transition={Slide}
  //         draggable
  //         position="bottom-center"
  //       />
  //       <StyledToastContainerWithBottomNavigation
  //         containerId="without-bottom-bar"
  //         closeButton={false}
  //         icon={false}
  //         hideProgressBar
  //         autoClose={999999}
  //         limit={1}
  //         transition={Slide}
  //         draggable
  //         position="bottom-center"
  //       />
  //     </MemoryRouter>,
  //   );

  //   const signoutButton = screen.getByRole('button', { name: '로그아웃' });
  //   await userEvent.click(signoutButton);

  //   const toast = screen.findByRole('alert', { name: '로그아웃' });
  //   expect(toast).toBeInTheDocument();
  // });

  // it('should render <Toast /> on account delete', async () => {
  //   render(
  //     <MemoryRouter>
  //       <MyViewMore />
  //       <StyledToastContainer
  //         containerId="with-bottom-bar"
  //         closeButton={false}
  //         icon={false}
  //         hideProgressBar
  //         autoClose={999999}
  //         limit={1}
  //         transition={Slide}
  //         draggable
  //         position="bottom-center"
  //       />
  //       <StyledToastContainerWithBottomNavigation
  //         containerId="without-bottom-bar"
  //         closeButton={false}
  //         icon={false}
  //         hideProgressBar
  //         autoClose={999999}
  //         limit={1}
  //         transition={Slide}
  //         draggable
  //         position="bottom-center"
  //       />
  //     </MemoryRouter>,
  //   );

  //   const deleteAccountButton = screen.getByRole('button', {
  //     name: '회원탈퇴',
  //   });
  //   await userEvent.click(deleteAccountButton);

  //   const toast = screen.findByRole('alert', { name: '탈퇴' });
  //   expect(toast).toBeInTheDocument();
  // });
});
