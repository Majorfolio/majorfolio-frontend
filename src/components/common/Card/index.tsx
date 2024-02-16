import React, { ReactNode } from 'react';

interface ModalType {
  header?: ReactNode;
  title?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
}

export default function Card({ header, title, body, footer }: ModalType) {
  return (
    <>
      {header && <div>header</div>}
      <div>
        {title && <div>{title}</div>}
        {body && <div>{body}</div>}
      </div>
      {footer && <div>{footer}</div>}
    </>
  );
}
