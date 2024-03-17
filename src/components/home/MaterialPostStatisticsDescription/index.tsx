import React from 'react'
import { StatisticsChild, StatisticsChildWrapper, StatisticsContainer } from './index.styles';
import Text from '../../common/Text';

interface MaterialPostStatisticsDescriptionProps {
  title: string;
  total?: number | string;
  weekly?: number | string;
  today?: number | string;
}

const MaterialPostStatisticsDescription = ({ title, total='-', weekly='-', today='-' }: MaterialPostStatisticsDescriptionProps) => {
  return (
    <StatisticsContainer>
      <Text size={16} weight='bold' lineHeight='sm' color='gray/gray900'> {title} </Text>
      <StatisticsChildWrapper>
        <StatisticsChild>
          <Text size={14} lineHeight='sm' color='gray/gray500'>누적 {title}수</Text>
          <Text size={14} lineHeight='sm' color='gray/gray900'> {total} </Text>
        </StatisticsChild>
        <StatisticsChild>
          <Text size={14} lineHeight='sm' color='gray/gray500'>주간 {title}수</Text>
          <Text size={14} lineHeight='sm' color='gray/gray900'> {weekly} </Text>
        </StatisticsChild>
        <StatisticsChild>
          <Text size={14} lineHeight='sm' color='gray/gray500'>오늘 {title}수</Text>
          <Text size={14} lineHeight='sm' color='gray/gray900'> {today} </Text>
        </StatisticsChild>
      </StatisticsChildWrapper>
    </StatisticsContainer>
  )
}

export default MaterialPostStatisticsDescription