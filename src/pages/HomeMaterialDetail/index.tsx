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
import useRefreshPayload from '../../hooks/common/useRefreshPayload';

const HomeMaterialDetail = () => {
  const [materialDetail, setMaterialDetail] = useState<null | MaterialDetail>(
    null,
  );
  const { materialId, memberId } = useParams();
  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();
  const authLevel = useAuthStore((state) => state.authLevel);
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshPayload = useRefreshPayload();

  const [hasUserMaterial, setHasUserMaterial] = useState<boolean>(true);

  const canPurchaseMaterial = authLevel >= AuthLevel.Member && !hasUserMaterial;

  const [likes, setLikes] = useState<number>(0);
  const [bookmarks, setBookmarks] = useState<number>(0);
  const [hasMemberLiked, setHasMemberLiked] = useState<boolean>(false);
  const [hasMemberBookmarked, setHasMemberBookmarked] =
    useState<boolean>(false);
  const reactions = likes + bookmarks;

  useEffect(() => {
    if (authLevel === AuthLevel.Member && materialId) {
      getMaterialDetail(
        parseInt(materialId, 10),
        accessToken,
        refreshPayload,
      ).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialDetail(result);
          const { isMemberBookmark, isMemberBuy, isMemberLike } = result;
          setHasUserMaterial(isMemberBuy);
          setLikes(result.like);
          setBookmarks(result.bookmark);
          setHasMemberLiked(isMemberLike);
          setHasMemberBookmarked(isMemberBookmark);
        }
      });
    } else if (materialId) {
      getMaterialDetail(parseInt(materialId, 10)).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialDetail(result);
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
            {materialDetail.className}
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
          <MaterialDetailPreview
            image={materialDetail.imageUrl}
            materialId={materialDetail.id}
          />

          <ProfileWrapper>
            <MaterialSellerProfile
              id={materialDetail.id}
              nickName={materialDetail.nickName}
              hasReaction
              like={likes}
              bookmark={bookmarks}
              hasMemberLiked={hasMemberLiked}
              hasMemberBookmarked={hasMemberBookmarked}
              toggleLike={() => {
                const newLikeStatus = !hasMemberLiked;
                setHasMemberLiked(newLikeStatus);
                setLikes((currentLikes) =>
                  newLikeStatus
                    ? currentLikes + 1
                    : Math.max(0, currentLikes - 1),
                );
              }}
              toggleBookmark={() => {
                const newBookmarkStatus = !hasMemberBookmarked;
                setHasMemberBookmarked(newBookmarkStatus);
                setBookmarks((currentBookmarks) =>
                  newBookmarkStatus
                    ? currentBookmarks + 1
                    : Math.max(0, currentBookmarks - 1),
                );
              }}
              memberId={Number(memberId)}
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
              reaction={reactions}
            />
          </StatisticsNumberWrapper>

          <AllDivider />

          <MaterialDetailInfo
            title={materialDetail.title}
            univ={materialDetail.univ}
            major={materialDetail.major}
            semester={materialDetail.semester}
            className={materialDetail.className}
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
      <MaterialDetailPreview image="" materialId={0} />

      <ProfileWrapper>
        <MaterialSellerProfile nickName="-" hasReaction={false} />
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
        univ=""
        major=""
        semester=""
        className=""
        professor=""
        grade=""
        score={0}
        pages={0}
      />
    </HomeMaterialDetailContainer>
  );
};

export default HomeMaterialDetail;
