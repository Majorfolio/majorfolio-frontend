import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
import useTransactions, {
  PurchaseKeys,
  SaleKeys,
  TransactionMaterial,
} from './useTransactions';
import HomeMaterialCardSkeleton from '../../../components/home/HomeMaterialCardSkeleton';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import StyledRow from '../ContactUs/index.styles';

type TransactionCardPropsType = {
  category: SaleKeys | PurchaseKeys;
  material: TransactionMaterial;
};

enum Category {
  beforePay = '결제대기',
  beforeRefund = '환불요청',
  afterPay = '결제완료',
  isDown = '구매완료',
  cancel = '구매취소',
  afterRefund = '환불완료',
  pending = '결제진행',
  complete = '판매완료',
}

export function TransactionCard({
  category,
  material,
}: TransactionCardPropsType) {
  const tagText = Category[category];
  const navigate = useNavigate();

  const header = (
    <>
      <Row gap={11} pb={16}>
        <SmallTag
          backgroundColor="sub_color/yellow/c"
          color="main_color/yellow_s"
          weight="bold"
          size={10}
        >
          {tagText}
        </SmallTag>
        <Text size={14} color="gray/gray500">
          {material.updateAt}
        </Text>
      </Row>
      <AllDividerThin />
    </>
  );

  const title = (
    <Row pt={12} pb={12} justify="space-between">
      <Text size={20} weight="bold" lineHeight="sm">
        {material.className}
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
          {material.univ}
        </Text>
      </Row>
      <Row gap={8}>
        <DepartmentSmallIcon />
        <Text size={14} color="gray/gray500">
          {material.major}
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
          {material.price}
        </Text>
      </Row>
    </>
  );

  return (
    <StyledTransactionCardContainer
      as="button"
      padding="16px"
      radius={6}
      background="gray/white"
      onClick={() => navigate(`/assignment/${material.id}/detail`)}
    >
      <Card header={header} title={title} body={body} footer={footer} />
    </StyledTransactionCardContainer>
  );
}

export default function Transactions() {
  const {
    isLoading,
    purchases,
    sales,
    selectedTab,
    setSelectedTab,
    bottomRef,
  } = useTransactions();

  const navigate = useNavigate();

  const topBar = (
    <SecondaryTopbar
      transition={
        <button type="button" onClick={() => navigate(-1)} aria-label="prev">
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

  const cardSection = (
    <>
      {selectedTab === 0 && (
        <>
          <CardTitleWrapper>
            <HomeTagCardTitle title="진행중" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {purchases?.beforePay?.map((purchase) => (
              <TransactionCard category="beforePay" material={purchase} />
            ))}
          </CardsWrapper>
          <CardsWrapper>
            {purchases?.beforeRefund?.map((purchase) => (
              <TransactionCard category="beforeRefund" material={purchase} />
            ))}
          </CardsWrapper>
          <CardTitleWrapper>
            <HomeTagCardTitle title="구매 완료" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {purchases?.afterPay?.map((purchase) => (
              <TransactionCard category="afterPay" material={purchase} />
            ))}
          </CardsWrapper>
          <CardsWrapper>
            {purchases?.isDown?.map((purchase) => (
              <TransactionCard category="isDown" material={purchase} />
            ))}
          </CardsWrapper>
          <CardTitleWrapper>
            <HomeTagCardTitle title="취소 및 환불" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {purchases?.cancel?.map((purchase) => (
              <TransactionCard category="cancel" material={purchase} />
            ))}
          </CardsWrapper>
          <CardsWrapper>
            {purchases?.afterRefund?.map((purchase) => (
              <TransactionCard category="afterRefund" material={purchase} />
            ))}
          </CardsWrapper>
        </>
      )}
      {selectedTab === 1 && (
        <>
          <CardTitleWrapper>
            <HomeTagCardTitle title="결제 진행 중" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {sales?.pending?.map((sale) => (
              <TransactionCard category="pending" material={sale} />
            ))}
          </CardsWrapper>
          <CardTitleWrapper>
            <HomeTagCardTitle title="판매 완료" isViewAll />
          </CardTitleWrapper>
          <CardsWrapper>
            {sales?.complete?.map((sale) => (
              <TransactionCard category="complete" material={sale} />
            ))}
          </CardsWrapper>
        </>
      )}
    </>
  );

  const skeletonCardSection = isLoading && (
    <CardsWrapper>
      <HomeMaterialCardSkeleton isBig={false} />
      <HomeMaterialCardSkeleton isBig={false} />
      <HomeMaterialCardSkeleton isBig={false} />
      <HomeMaterialCardSkeleton isBig={false} />
      <HomeMaterialCardSkeleton isBig={false} />
    </CardsWrapper>
  );

  return (
    <>
      {topBar}
      <StyledPageContainer>
        {tabBar}
        {cardSection}
        {skeletonCardSection}
        <div ref={bottomRef} style={{ height: '10px' }} />
      </StyledPageContainer>
    </>
  );
}
