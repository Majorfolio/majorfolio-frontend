import React, { ChangeEvent, useState } from 'react';

type TextReturnType<T extends string> = Record<T, string> &
  Record<
    `on${Capitalize<T>}Change`,
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  >;

export default function useText<T extends string>(title: T): TextReturnType<T> {
  const [text, setText] = useState<string>('');

  const onTextChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setText(event.target.value);
  };

  const capitalizedTitle = title[0].toUpperCase() + title.slice(1);

  return {
    [title]: text,
    [`on${capitalizedTitle}Change`]: onTextChange,
  } as TextReturnType<T>;
}
