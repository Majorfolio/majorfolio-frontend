import React, { ReactNode } from 'react';
import AllDividerThin from '../AllDividerThin';
import Column from '../Column';
import StyledTransactionCard from './index.styles';

interface CardPropsType {
  header?: ReactNode;
  title?: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
}

export default function Card({ header, title, body, footer }: CardPropsType) {
  return (
    <>
      {header && <h3>{header}</h3>}
      <div>
        {title && <h4>{title}</h4>}
        {body}
      </div>
      {footer && <div>{footer}</div>}
    </>
  );
}
