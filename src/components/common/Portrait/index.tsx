import React from 'react';
import {
  CharacterLarge1Icon,
  CharacterLarge2Icon,
  CharacterLarge3Icon,
  CharacterLarge4Icon,
  CharacterLarge5Icon,
  CharacterLarge6Icon,
  CharacterLarge7Icon,
  CharacterLarge8Icon,
  CharacterSmall1Icon,
  CharacterSmall2Icon,
  CharacterSmall3Icon,
  CharacterSmall4Icon,
  CharacterSmall5Icon,
  CharacterSmall6Icon,
  CharacterSmall7Icon,
  CharacterSmall8Icon,
} from '../../../assets/icons';

interface PortraitPropsType {
  index: string;
}

export default function Portrait({ index }: PortraitPropsType) {
  switch (index) {
    case '0':
      return <CharacterLarge1Icon />;
    case '1':
      return <CharacterLarge2Icon />;
    case '2':
      return <CharacterLarge3Icon />;
    case '3':
      return <CharacterLarge4Icon />;
    case '4':
      return <CharacterLarge5Icon />;
    case '5':
      return <CharacterLarge6Icon />;
    case '6':
      return <CharacterLarge7Icon />;
    case '7':
      return <CharacterLarge8Icon />;
    default:
      return <CharacterLarge1Icon />;
  }
}

export function SmallPortrait({ index }: PortraitPropsType) {
  switch (index) {
    case '0':
      return <CharacterSmall1Icon />;
    case '1':
      return <CharacterSmall2Icon />;
    case '2':
      return <CharacterSmall3Icon />;
    case '3':
      return <CharacterSmall4Icon />;
    case '4':
      return <CharacterSmall5Icon />;
    case '5':
      return <CharacterSmall6Icon />;
    case '6':
      return <CharacterSmall7Icon />;
    case '7':
      return <CharacterSmall8Icon />;
    default:
      return <CharacterSmall1Icon />;
  }
}
