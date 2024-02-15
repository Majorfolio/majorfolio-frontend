import React, { ReactNode } from 'react';

interface TopBarPropsType {
  transition: ReactNode;
  title: ReactNode;
  icons: ReactNode;
}

export default function TopBar({ transition, title, icons }: TopBarPropsType) {
  return (
    <>
      {transition && <div>{transition}</div>}
      {title && <div>{title}</div>}
      {icons && <div>{icons}</div>}
    </>
  );
}
