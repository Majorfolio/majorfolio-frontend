// import { Meta, StoryObj } from '@storybook/react';
// import Button from '../components/common/Button';

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../components/common/Text';

const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Default</>,
  },
};

export const H1: Story = {
  args: {
    children: <>H1</>,
    size: 22,
    weight: 'bold',
    lineHeight: 'lg',
  },
};

export const H2: Story = {
  args: {
    children: <>H2</>,
    size: 22,
    weight: 'md',
    lineHeight: 'lg',
  },
};

export const H3: Story = {
  args: {
    children: <>H3</>,
    size: 20,
    weight: 'bold',
    lineHeight: 'lg',
  },
};

export const H4: Story = {
  args: {
    children: <>H4</>,
    size: 20,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const Subtitle: Story = {
  args: {
    children: <>Subtitle</>,
    size: 18,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const BodyLarge1: Story = {
  args: {
    children: <>BodyLarge1</>,
    size: 16,
    weight: 'bold',
    lineHeight: 'lg',
  },
};

export const BodyLarge2: Story = {
  args: {
    children: <>BodyLarge2</>,
    size: 16,
    weight: 'md',
    lineHeight: 'lg',
  },
};

export const BodyLarge3: Story = {
  args: {
    children: <>BodyLarge3</>,
    size: 16,
    weight: 'bold',
    lineHeight: 'md',
  },
};

export const BodyLarge4: Story = {
  args: {
    children: <>BodyLarge4</>,
    size: 16,
    weight: 'md',
    lineHeight: 'md',
  },
};

export const BodyLarge5: Story = {
  args: {
    children: <>BodyLarge5</>,
    size: 16,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const BodyLarge6: Story = {
  args: {
    children: <>BodyLarge6</>,
    size: 16,
    weight: 'md',
    lineHeight: 'sm',
  },
};

export const Body1: Story = {
  args: {
    children: <>Body1</>,
    size: 14,
    weight: 'bold',
    lineHeight: 'md',
  },
};

export const Body2: Story = {
  args: {
    children: <>Body2</>,
    size: 14,
    weight: 'md',
    lineHeight: 'lg',
  },
};

export const Body3: Story = {
  args: {
    children: <>Body3</>,
    size: 14,
    weight: 'md',
    lineHeight: 'md',
  },
};

export const Body4: Story = {
  args: {
    children: <>Body4</>,
    size: 14,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const Body5: Story = {
  args: {
    children: <>Body1</>,
    size: 14,
    weight: 'md',
    lineHeight: 'sm',
  },
};

export const Small1: Story = {
  args: {
    children: <>Small1</>,
    size: 12,
    weight: 'md',
    lineHeight: 'md',
  },
};

export const Small2: Story = {
  args: {
    children: <>Small2</>,
    size: 12,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const Small3: Story = {
  args: {
    children: <>Small1</>,
    size: 12,
    weight: 'md',
    lineHeight: 'sm',
  },
};

export const Small4: Story = {
  args: {
    children: <>Small4</>,
    size: 12,
    weight: 'bold',
    lineHeight: 'sm',
  },
};

export const Small5: Story = {
  args: {
    children: <>Small5</>,
    size: 10,
    weight: 'md',
    lineHeight: 'sm',
  },
};
