import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledSectionContainer } from '../../../components/common/UploadSection/index.styles';
import Description from '../../../components/common/Description';
import RowButton from '../../../components/common/RowButton';
import { LargeTag } from '../../../components/common/Tag';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { CloseDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import Column from '../../../components/common/Column';
import StyledTextContainer from './index.styles';

export enum FAQs {
  Refund,
  Notification,
  Account,
}

const FAQContents = {
  [FAQs.Refund]: (
    <>
      <p>
        `고객님이 상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가
        훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
      </p>
      <br />
      <p>
        고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터 7일이
        경과한 경우
      </p>
      <br />
      <p>
        신선식품(냉장/냉동 포함)을 단순변심/주문착오로 교환/반품 신청하는 경우
      </p>
      <br />
      <p>고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우</p>
      <br />
      <p>
        시간 경과에 따라 상품 등의 가치가 현저히 감소하여 재판매가 불가능한 경우
      </p>
    </>
  ),

  [FAQs.Notification]: (
    <>
      <p>
        `고객님이 상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가
        훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
      </p>
      <br />
      <p>
        고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터 7일이
        경과한 경우
      </p>
      <br />
      <p>
        신선식품(냉장/냉동 포함)을 단순변심/주문착오로 교환/반품 신청하는 경우
      </p>
      <br />
      <p>고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우</p>
      <br />
      <p>
        시간 경과에 따라 상품 등의 가치가 현저히 감소하여 재판매가 불가능한 경우
      </p>
    </>
  ),
  [FAQs.Account]: (
    <>
      <p>
        `고객님이 상품 포장을 개봉하여 사용 또는 설치 완료되어 상품의 가치가
        훼손된 경우 (단, 내용 확인을 위한 포장 개봉의 경우는 예외)
      </p>
      <br />
      <p>
        고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터 7일이
        경과한 경우
      </p>
      <br />
      <p>
        신선식품(냉장/냉동 포함)을 단순변심/주문착오로 교환/반품 신청하는 경우
      </p>
      <br />
      <p>고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우</p>
      <br />
      <p>
        시간 경과에 따라 상품 등의 가치가 현저히 감소하여 재판매가 불가능한 경우
      </p>
    </>
  ),
};

export default function FAQList() {
  const navigate = useNavigate();

  const [openedFAQ, setOpenedFAQ] = useState<null | FAQs>(null);

  const description = (
    <Description normalText="메이저폴리오의" boldText="FAQ를 확인해보세요" />
  );

  const faqList = (
    <>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              교환/반품
            </LargeTag>
          }
          text="상품을 교환/반품하고 싶어요."
          onClick={() =>
            setOpenedFAQ(openedFAQ === FAQs.Refund ? null : FAQs.Refund)
          }
        />
        {openedFAQ === FAQs.Refund && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.Refund]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              알림
            </LargeTag>
          }
          text="휴대폰 알림은 어떻게 설정하나요?"
          onClick={() =>
            setOpenedFAQ(
              openedFAQ === FAQs.Notification ? null : FAQs.Notification,
            )
          }
        />
        {openedFAQ === FAQs.Notification && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.Notification]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
      <Column>
        <RowButton
          tag={
            <LargeTag
              backgroundColor="gray/gray100"
              size={12}
              weight="bold"
              lineHeight="sm"
              color="gray/gray900"
            >
              계정
            </LargeTag>
          }
          text="학교인증은 어떻게 하나요?"
          onClick={() =>
            setOpenedFAQ(openedFAQ === FAQs.Account ? null : FAQs.Account)
          }
        />
        {openedFAQ === FAQs.Account && (
          <StyledTextContainer>
            <Text size={14} color="gray/gray900">
              {FAQContents[FAQs.Account]}
            </Text>
          </StyledTextContainer>
        )}
      </Column>
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
            FAQ
          </Text>
        }
      />
      <StyledPageContainer>
        {description}
        <StyledSectionContainer>{faqList}</StyledSectionContainer>
      </StyledPageContainer>
    </>
  );
}
