import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  DetailContainer,
  HomeMaterialDetailContainer,
  ProfileWrapper,
  StatisticsNumberWrapper,
  StickyBottom,
} from './index.styles';
import MaterialDetailPreview from '../../components/home/MaterialDetailPreview';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import MaterialDetailPost from '../../components/home/MaterialDetailPost';
import MaterialDetailInfo from '../../components/home/MaterialDetailInfo';
import AllDivider from '../../components/common/AllDivider';
import AllDividerThin from '../../components/common/AllDividerThin';
import { getMaterialDetail } from '../../apis/materials';
import { MaterialDetail } from '../../components/home/Material/index.types';
import MaterialPostStatisticsNumber from '../../components/home/MaterialPostStatisticsNumber';
import BottomPaymentAmount from '../../components/home/BottomPaymentAmount';
import Button from '../../components/common/Button';
import Text from '../../components/common/Text';
import { SecondaryTopbar } from '../../components/common/TopBar';
import {
  ArrowBackDefaultIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../assets/icons';
import useModal from '../../hooks/common/useModal';
import Modal from '../../components/common/Modal';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';

const HomeMaterialDetail = () => {
  const [materialDetail, setMaterialDetail] = useState<null | MaterialDetail>(
    null,
  );
  const { materialId } = useParams();
  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();
  const authLevel = useAuthStore((state) => state.authLevel);

  const [hasUserMaterial, setHasUserMaterial] = useState<boolean>(true);

  const canPurchaseMaterial = authLevel >= AuthLevel.Member && !hasUserMaterial;

  useEffect(() => {
    if (materialId) {
      getMaterialDetail(parseInt(materialId, 10)).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialDetail(result);
          const { isMemberBookmark, isMemberBuy, isMemberLike } = result;
          setHasUserMaterial(isMemberBuy);
        }
      });
    }
  }, []);

  const handleBuyNowClick = () => {
    const dataToSend = materialDetail;
    navigate(`/buy-now/${materialId}`, { state: dataToSend });
  };

  return materialDetail ? (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            자세히보기
          </Text>
        }
        icons={[
          <button
            type="button"
            onClick={() =>
              activateModal('TO_BE_UPDATED', {
                primaryAction: () => {},
              })
            }
            aria-label="cart"
          >
            <CartDefaultIcon />
          </button>,
          <button
            type="button"
            onClick={() =>
              activateModal('TO_BE_UPDATED', {
                primaryAction: () => {},
              })
            }
            aria-label="alarm"
          >
            <NotificationDefaultIcon />
          </button>,
        ]}
      />
      <Modal
        modalRef={modalRef}
        category={modalCategory}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />

      <DetailContainer>
        <HomeMaterialDetailContainer>
          <MaterialDetailPreview image={materialDetail.imageUrl} />

          <ProfileWrapper>
            <MaterialSellerProfile
              id={materialDetail.id}
              nickname={materialDetail.nickName}
              hasReaction
              like={materialDetail.like}
              bookmark={materialDetail.bookmark}
            />
          </ProfileWrapper>
          <AllDividerThin />

          <MaterialDetailPost
            title={materialDetail.title}
            content={materialDetail.description}
            updateTime={materialDetail.updateTime}
          />

          <AllDivider />

          <StatisticsNumberWrapper>
            <MaterialPostStatisticsNumber
              sell={materialDetail.sell}
              follower={materialDetail.follower}
              reaction={materialDetail.bookmark + materialDetail.like}
            />
          </StatisticsNumberWrapper>

          <AllDivider />

          <MaterialDetailInfo
            title={materialDetail.title}
            university={materialDetail.university}
            major={materialDetail.major}
            semester={materialDetail.semester}
            subjectTitle={materialDetail.subjectTitle}
            professor={materialDetail.professor}
            grade={materialDetail.grade}
            score={materialDetail.score}
            pages={materialDetail.pages}
          />
        </HomeMaterialDetailContainer>
      </DetailContainer>

      <StickyBottom>
        <BottomPaymentAmount />
        <ButtonWrapper>
          <Button
            type="button"
            category="primary"
            onClick={() => {
              handleBuyNowClick();
            }}
            disabled={!canPurchaseMaterial}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              바로구매
            </Text>
          </Button>
        </ButtonWrapper>
      </StickyBottom>
    </>
  ) : (
    // skeleton
    <HomeMaterialDetailContainer>
      <MaterialDetailPreview image="" />

      <ProfileWrapper>
        <MaterialSellerProfile nickname="-" hasReaction={false} />
      </ProfileWrapper>
      <AllDividerThin />

      <MaterialDetailPost title="-" content="-" updateTime="-" />

      <AllDivider />

      <StatisticsNumberWrapper>
        <MaterialPostStatisticsNumber sell={0} follower={0} reaction={0} />
      </StatisticsNumberWrapper>

      <AllDivider />

      <MaterialDetailInfo
        title=""
        university=""
        major=""
        semester=""
        subjectTitle=""
        professor=""
        grade=""
        score={0}
        pages={0}
      />
    </HomeMaterialDetailContainer>
  );
};

export default HomeMaterialDetail;
