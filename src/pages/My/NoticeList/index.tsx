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

export enum Notices {
  PersonalInfoPolicy,
  PreOrder,
}

export default function NoticeList() {
  const navigate = useNavigate();

  const description = (
    <Description
      normalText="메이저폴리오의"
      boldText="새로운 소식을 확인해보세요"
    />
  );

  const noticeList = (
    <>
      <RowButton
        tag={
          <LargeTag
            backgroundColor="gray/gray100"
            size={12}
            weight="bold"
            lineHeight="sm"
            color="gray/gray900"
          >
            공지
          </LargeTag>
        }
        text="개인정보처리방침 개정 안내"
        onClick={() =>
          navigate(`../notice-detail/${Notices.PersonalInfoPolicy}`)
        }
      />
      <RowButton
        tag={
          <LargeTag
            backgroundColor="sub_color/yellow/c"
            size={12}
            weight="bold"
            lineHeight="sm"
            color="main_color/yellow_s"
          >
            혜택
          </LargeTag>
        }
        text="사전예약 시 혜택을 살펴보세요"
        onClick={() => navigate(`../notice-detail/${Notices.PreOrder}`)}
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
            공지사항
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
