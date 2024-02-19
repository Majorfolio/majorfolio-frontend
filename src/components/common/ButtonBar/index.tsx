import React, { ReactNode } from 'react';

interface ButtonBarPropsType {
  text: string;
  icon: ReactNode;
  action?: () => void;
}

export default function ButtonBar({
  text,
  icon,
  action = () => {},
}: ButtonBarPropsType) {
  return (
    <>
      {text && <div />}
      {icon && <div>{icon}</div>}
    </>
  );
}
