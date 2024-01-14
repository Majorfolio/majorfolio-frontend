export type ColorType =
  | 'gray/white'
  | 'gray/grayBG'
  | 'gray/gray50'
  | 'gray/gray100'
  | 'gray/gray150'
  | 'gray/gray200'
  | 'gray/gray400'
  | 'gray/gray500'
  | 'gray/gray600'
  | 'gray/gray800'
  | 'gray/gray900'
  | 'gray/black'
  | 'main_color/yellow_p'
  | 'main_color/yellow_s'
  | 'main_color/blue_p'
  | 'main_color/blue_s'
  | 'sub_color/red/p'
  | 'sub_color/red/s'
  | 'sub_color/red/c'
  | 'sub_color/orange/p'
  | 'sub_color/orange/s'
  | 'sub_color/orange/c'
  | 'sub_color/orange/bg'
  | 'sub_color/yellow/p'
  | 'sub_color/yellow/s'
  | 'sub_color/yellow/c'
  | 'sub_color/yellow/bg'
  | 'sub_color/green/p'
  | 'sub_color/green/s'
  | 'sub_color/green/c'
  | 'sub_color/green/bg'
  | 'sub_color/blue/p'
  | 'sub_color/blue/s'
  | 'sub_color/blue/c'
  | 'sub_color/blue/bg'
  | 'sub_color/indigo/p'
  | 'sub_color/indigo/s'
  | 'sub_color/indigo/c'
  | 'sub_color/indigo/bg'
  | 'sub_color/purple/p'
  | 'sub_color/purple/s'
  | 'sub_color/purple/c'
  | 'sub_color/purple/bg';

export type WeightType = 'bold' | 'md';

export type LineHeightType = 'sm' | 'md' | 'lg';

const theme = {
  color: {
    'gray/white': '#FFFFFF',
    'gray/grayBG': '#FBFCFD',
    'gray/gray50': '#F2F5F8',
    'gray/gray100': '#EBEEF2',
    'gray/gray150': '#DCE2E7',
    'gray/gray200': '#CED3DA',
    'gray/gray400': '#A3ABB3',
    'gray/gray500': '#767D86',
    'gray/gray600': '#4B535A',
    'gray/gray800': '#2C2F34',
    'gray/gray900': '#232629',
    'gray/black': '#111111',
    'main_color/yellow_p': '#FFA722',
    'main_color/yellow_s': '#FF7A00',
    'main_color/blue_p': '#4340DB',
    'main_color/blue_s': '#302DAC',
    'sub_color/red/p': '#F53165',
    'sub_color/red/s': '#FFABC1',
    'sub_color/red/c': '#FEE0E8',
    'sub_color/orange/p': '#FF7052',
    'sub_color/orange/s': '#FFBCAE',
    'sub_color/orange/c': '#FFDBD3',
    'sub_color/orange/bg': '#FFF1EE',
    'sub_color/yellow/p': '#FFAA00',
    'sub_color/yellow/s': '#FFD88C',
    'sub_color/yellow/c': '#FFE9BF',
    'sub_color/yellow/bg': '#FFF7E6',
    'sub_color/green/p': '#26BF66',
    'sub_color/green/s': '#B3E9CA',
    'sub_color/green/c': '#D4F2E0',
    'sub_color/green/bg': '#EAF9F0',
    'sub_color/blue/p': '#4DA1F7',
    'sub_color/blue/s': '#AFD4FB',
    'sub_color/blue/c': '#D2E7FD',
    'sub_color/blue/bg': '#EEF6FF',
    'sub_color/indigo/p': '#4340DB',
    'sub_color/indigo/s': '#CAC8FA',
    'sub_color/indigo/h': '#DBDBFF',
    'sub_color/indigo/c': '#E3E3FF',
    'sub_color/indigo/bg': '#F0F0FF',
    'sub_color/purple/p': '#7E4FF6',
    'sub_color/purple/s': '#C6B0FF',
    'sub_color/purple/c': '#E5DCFD',
    'sub_color/purple/bg': '#F5F1FF',
  },
  weight: {
    bold: 500,
    md: 700,
  },
  lineHeight: {
    sm: 1.2,
    md: 1.4,
    lg: 1.6,
  },
};

export default theme;
