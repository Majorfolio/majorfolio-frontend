import React from 'react';
import DetailPost from '../components/DetailPost/DetailPost';

export default {
  title: 'Home/DetailPost',
  component: DetailPost,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
  },
};

function Template(args) {
  return <DetailPost {...args} />;
}

export const Post1 = Template.bind({});

Post1.args = {
  title: '[과제] ALIDEA',
  content:
    '3학년 공업디자인학과 게임디자인과 기획 수업에서 작업했던 과제물이며, A+ 학점을 받았습니다. 프로그램은 3D MAX를 사용하였고 홍길동 교수님 수업은 열심히만 하면.. 학점 잘 받을 수 있습니다!',
};
