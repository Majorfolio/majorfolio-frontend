import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSectionContainer } from '../../../components/common/UploadSection/index.styles';
import Description from '../../../components/common/Description';
import RowButton from '../../../components/common/RowButton';
import { LargeTag } from '../../../components/common/Tag';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { CloseDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

export enum Events {
  NotionEvent,
  DiscountCoupon,
}

export default function EventList() {
  const navigate = useNavigate();

  const description = (
    <Description normalText="메이저폴리오의" boldText="이벤트를 확인해보세요" />
  );

  const noticeList = (
    <>
      <RowButton
        tag={
          <LargeTag
            backgroundColor="sub_color/green/c"
            size={12}
            weight="bold"
            lineHeight="sm"
            color="sub_color/green/p"
          >
            진행
          </LargeTag>
        }
        text="메이저폴리오 노션에서 이벤트 진행중!"
        onClick={() => navigate(`../event-detail/${Events.NotionEvent}`)}
      />
      <RowButton
        tag={
          <LargeTag
            backgroundColor="gray/gray100"
            size={12}
            weight="bold"
            lineHeight="sm"
            color="gray/gray900"
          >
            종료
          </LargeTag>
        }
        text="선착순 100명에게 할인쿠폰을 드려요!"
        onClick={() => navigate(`../event-detail/${Events.DiscountCoupon}`)}
      />
    </>
  );
  return (
    <>
      <SecondaryTopbar
        transition={
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="previous"
          >
            <CloseDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            이벤트
          </Text>
        }
      />
      <StyledPageContainer>
        {description}
        <StyledSectionContainer>{noticeList}</StyledSectionContainer>
      </StyledPageContainer>
    </>
  );
}
