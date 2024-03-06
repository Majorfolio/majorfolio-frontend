import React, { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import Text from '../../../components/common/Text';
import { CloseDefaultIcon } from '../../../assets/icons';
import { StyledSectionContainer } from '../../../components/common/UploadSection/index.styles';
import RowButton, { RowText } from '../../../components/common/RowButton';
import { LargeTag } from '../../../components/common/Tag';
import Image from '../../../components/common/Image';
import FirstEvent from '../../../assets/images/notice_image_0.png';
import StyledPageContainer from '../../Upload/UploadDefaultStep/index.styles';
import { Events } from '../EventList';

interface EventDetailPropsType {
  eventDescription: ReactNode;
  text?: ReactNode;
  imageURL?: string;
}

export default function EventDetail({
  eventDescription,
  text,
  imageURL,
}: EventDetailPropsType) {
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
          {eventDescription}
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

export function EventDetailById() {
  const { eventId: stringEventId } = useParams();

  if (!stringEventId) {
    return <span />;
  }

  const noticeId = Number(stringEventId);

  if (noticeId === Events.NotionEvent) {
    // TODO change HTML tag to satisfy markup semantic
    const eventDescription = (
      <RowText
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
      />
    );

    return (
      <EventDetail eventDescription={eventDescription} imageURL={FirstEvent} />
    );
  }
  if (noticeId === Events.DiscountCoupon) {
    const eventDescription = (
      <RowText
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
      />
    );

    return (
      <EventDetail eventDescription={eventDescription} imageURL={FirstEvent} />
    );
  }
}
