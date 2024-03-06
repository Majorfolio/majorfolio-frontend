import React, { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import Text from '../../../components/common/Text';
import { CloseDefaultIcon } from '../../../assets/icons';
import { StyledSectionContainer } from '../../../components/common/UploadSection/index.styles';
import RowButton from '../../../components/common/RowButton';
import { LargeTag } from '../../../components/common/Tag';
import Image from './Image';
import FirstNotice from '../../../assets/images/notice_image_0.png';
import { Notices } from '../NoticeList';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';

interface NoticeDetailPropsType {
  noticeDescription: ReactNode;
  text?: ReactNode;
  imageURL?: string;
}

export default function NoticeDetail({
  noticeDescription,
  text,
  imageURL,
}: NoticeDetailPropsType) {
  const navigate = useNavigate();

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
        <StyledSectionContainer>
          {noticeDescription}
          {text && <div>{text}</div>}
          {imageURL && (
            <div>
              <Image src={imageURL} alt="notice description" />
            </div>
          )}
        </StyledSectionContainer>
      </StyledPageContainer>
    </>
  );
}

export function NoticeDetailById() {
  const { noticeId: stringNoticeId } = useParams();
  const navigate = useNavigate();

  if (!stringNoticeId) {
    return <span />;
  }

  const noticeId = Number(stringNoticeId);

  if (noticeId === Notices.PersonalInfoPolicy) {
    // TODO change HTML tag to satisfy markup semantic
    const noticeDescription = (
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
        disabled
      />
    );

    const text = (
      <Text size={14} lineHeight="lg" color="gray/black">
        자료의 정보 및 내용의 진실성에 대하여 메이저폴리오는 보증하지 않으며,
        해당 정보 및 게시물 저작권과 기타 법적 책임은 자료 등록자에게 있습니다.
        자료 및 게시물 내용의 불법적 이용, 무단 전재∙배포는 금지되어 있습니다.
        저작권침해, 명예훼손 등 분쟁 요소 발견 시 자료의 정보 및 내용의 진실성에
        대하여 메이저폴리오는 보증하지 않으며, 해당 정보 및 게시물 저작권과 기타
        법적 책임은 자료 등록자에게 있습니다. 자료 및 게시물 내용의 불법적 이용,
        무단 전재∙배포는 금지되어 있습니다. 저작권침해, 명예훼손 등 분쟁 요소
        발견 시
      </Text>
    );

    return <NoticeDetail noticeDescription={noticeDescription} text={text} />;
  }
  if (noticeId === Notices.PreOrder) {
    const noticeDescription = (
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
        disabled
      />
    );

    return (
      <NoticeDetail
        noticeDescription={noticeDescription}
        imageURL={FirstNotice}
      />
    );
  }
}
