import React, { ChangeEvent, useState } from 'react';

// interface TextEventHandler<T extends string> {
//   (event: ChangeEvent<HTMLInputElement>): void;
// }

type TextReturnType<T extends string> = {
  [K in T]: string;
} & {
  [K in `on${Capitalize<T>}Change`]: (
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

export default function useText<T extends string>(title: T): TextReturnType {
  const [text, setText] = useState<string>('');

  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1);

  return { [title]: text, [`on${capitalizedTitle}Change`]: onTextChange };
}
