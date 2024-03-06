import React, { useState } from 'react';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import {
  ArrowBackDefaultIcon,
  DepartmentSmallIcon,
  SchoolSmallIcon,
} from '../../../assets/icons';
import Text from '../../../components/common/Text';
import TapMenu, { SelectableTapMenu } from '../../../components/common/TapMenu';
import Row from '../../../components/common/Row';
import { SmallTag } from '../../../components/common/Tag';
import Card from '../../../components/common/Card';
import Column from '../../../components/common/Column';
import AllDividerThin from '../../../components/common/AllDividerThin';
import StyledTransactionCardContainer from './index.styles';
import { CardTitleWrapper, CardsWrapper } from '../../HomeViewAll/index.styles';
import HomeTagCardTitle from '../../../components/home/HomeTagCardTitle';

export function TransactionCard() {
  const header = (
    <>
      <Row gap={11} pb={16}>
        <SmallTag
          backgroundColor="sub_color/yellow/c"
          color="main_color/yellow_s"
          weight="bold"
          size={10}
        >
          결제대기
        </SmallTag>
        <Text size={14} color="gray/gray500">
          2023. 11. 15
        </Text>
      </Row>
      <AllDividerThin />
    </>
  );

  const title = (
    <Row pt={12} pb={12} justify="space-between">
      <Text size={20} weight="bold" lineHeight="sm">
        게임디자인과 기획
      </Text>
      <SmallTag
        color="gray/gray900"
        backgroundColor="gray/gray100"
        size={10}
        weight="bold"
        lineHeight="sm"
      >
        PDF
      </SmallTag>
    </Row>
  );

  const body = (
    <Column pb={20}>
      <Row gap={8}>
        <SchoolSmallIcon />
        <Text size={14} color="gray/gray500">
          국민대학교
        </Text>
      </Row>
      <Row gap={8}>
        <DepartmentSmallIcon />
        <Text size={14} color="gray/gray500">
          공업디자인학과
        </Text>
      </Row>
    </Column>
  );

  const footer = (
    <>
      <AllDividerThin />
      <Row justify="space-between" pt={16}>
        <Text color="gray/gray500" size={16}>
          자료 금액
        </Text>
        <Text color="gray/gray900" size={16} weight="bold">
          5200원
        </Text>
      </Row>
    </>
  );

  return (
    <StyledTransactionCardContainer
      padding="16px"
      radius={6}
      background="gray/white"
    >
      <Card header={header} title={title} body={body} footer={footer} />
    </StyledTransactionCardContainer>
  );
}

export default function Transactions() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const topBar = (
    <SecondaryTopbar
      transition={
        <button type="button" onClick={() => {}} aria-label="prev">
          <ArrowBackDefaultIcon />
        </button>
      }
      title={
        <Text color="gray/gray900" size={18} weight="bold" lineHeight="sm">
          거래 내역
        </Text>
      }
    />
  );

  const tabBar = (
    <SelectableTapMenu
      labels={['구매 내역', '판매 내역']}
      selectedItem={selectedTab}
      onItemClick={(index) => setSelectedTab(index)}
    />
  );

  const title = (
    <CardTitleWrapper>
      <HomeTagCardTitle title="진행중" isViewAll />
    </CardTitleWrapper>
  );

  const cards = (
    <CardsWrapper>
      <TransactionCard />
    </CardsWrapper>
  );

  return (
    <>
      {topBar}
      {tabBar}
      {title}
      {cards}
    </>
  );
}
