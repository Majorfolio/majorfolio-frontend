import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  ButtonWrapper,
  DetailContainer,
  HomeMaterialDetailContainer,
  ProfileWrapper,
  StatisticsNumberWrapper,
  StickyBottom,
} from '../index.styles';
import MaterialDetailPreview from '../../../components/home/MaterialDetailPreview';
import MaterialSellerProfile from '../../../components/home/MaterialSellerProfile';
import MaterialDetailPost from '../../../components/home/MaterialDetailPost';
import MaterialDetailInfo from '../../../components/home/MaterialDetailInfo';
import AllDivider from '../../../components/common/AllDivider';
import AllDividerThin from '../../../components/common/AllDividerThin';
import { getMyMaterialDetail, getMyMaterialDetailStats } from '../../../apis/materials';
import { MyMaterialDetail, MyMaterialStats } from '../../../components/home/Material/index.types';
import MaterialPostStatisticsNumber, { SellerMaterialPostStatisticsNumber } from '../../../components/home/MaterialPostStatisticsNumber';
import BottomPaymentAmount from '../../../components/home/BottomPaymentAmount';
import Button from '../../../components/common/Button';
import Text from '../../../components/common/Text';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import {
  ArrowBackDefaultIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../../../assets/icons';
import useModal from '../../../hooks/common/useModal';
import Modal from '../../../components/common/Modal';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import { SelectableTapMenu } from '../../../components/common/TapMenu';
import MaterialPostStatisticsDescription from '../../../components/home/MaterialPostStatisticsDescription';

const SellerMaterialDetail = () => {
  const [materialDetail, setMaterialDetail] = useState<null | MyMaterialDetail>(
    null,
  );
  const [materialStats, setMaterialStats] = useState<null | MyMaterialStats>(null,);
  const { materialId, memberId } = useParams();
  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const authLevel = useAuthStore((state) => state.authLevel);
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshPayload = useRefreshPayload();

  const [likes, setLikes] = useState<number>(0);
  const [bookmarks, setBookmarks] = useState<number>(0);
  const [hasMemberLiked, setHasMemberLiked] = useState<boolean>(false);
  const [hasMemberBookmarked, setHasMemberBookmarked] =
    useState<boolean>(false);
  const reactions = likes + bookmarks;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (authLevel === AuthLevel.Member && materialId) {
      getMyMaterialDetail(
        parseInt(materialId, 10),
        accessToken,
        refreshPayload,
      ).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialDetail(result);
          const { isMemberBookmark, isMemberLike } = result;
          setLikes(result.like);
          setBookmarks(result.bookmark);
          setHasMemberLiked(isMemberLike);
          setHasMemberBookmarked(isMemberBookmark);
        }
      });
      getMyMaterialDetailStats(
        parseInt(materialId, 10),
        accessToken,
        refreshPayload,      
      ).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialStats(result);
        }
      })
    } else if (materialId) {
      getMyMaterialDetail(parseInt(materialId, 10)).then((data) => {
        const { result } = data;
        if (result) {
          setMaterialDetail(result);
        }
      });
    }
  }, []);

  // TODO: 페이지 넘어왔을 때 모달 열리도록 수정해야 함 (현재: 무한렌더링문제)
  // if (materialDetail?.status) {
  //   switch (materialDetail.status) {
  //     case "reviewing":
  //       activateModal('SALE_REVIEW', {
  //         primaryAction: () => {},
  //       });
  //       break;
  //     case "ben":
  //       activateModal('SALE_PEND', {
  //         primaryAction: () => {},
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // }

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
            image={materialDetail.image}
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

          <SelectableTapMenu
            labels={['정보', '통계']}
            selectedItem={selectedTab}
            onItemClick={(index) => setSelectedTab(index)}
          />

          { selectedTab === 0 && (
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
          )}
          { selectedTab === 1 && (
            <>
              <StatisticsNumberWrapper>
                <SellerMaterialPostStatisticsNumber
                  sell={materialStats?.saleStat.todaySale}
                  view={materialStats?.viewStat.totalView}
                  reaction={reactions}
                />
              </StatisticsNumberWrapper>

              <AllDivider />
              
              <MaterialPostStatisticsDescription 
                title='판매'
                total={materialStats?.saleStat.totalSale}
                weekly={materialStats?.saleStat.weeklySale}
                today={materialStats?.saleStat.todaySale}
              />
              <MaterialPostStatisticsDescription 
                title='조회'
                total={materialStats?.viewStat.totalView}
                weekly={materialStats?.viewStat.weeklyView}
                today={materialStats?.viewStat.todayView}                
              />
              <MaterialPostStatisticsDescription 
                title='반응'
                total={materialStats?.bookmarkStat.totalBookmark}
                weekly={materialStats?.bookmarkStat.weeklyBookmark}
                today={materialStats?.bookmarkStat.todayBookmark}
              />                            
            </>
          )}


        </HomeMaterialDetailContainer>
      </DetailContainer>

      <StickyBottom>
        <BottomPaymentAmount />
        <ButtonWrapper>
          <Button
            type="button"
            category="secondary"
            onClick={() => {
              activateModal('TO_BE_UPDATED', {
                primaryAction: () => {},
              })
            }}
          >
            <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
              자료 수정
            </Text>
          </Button>

          { materialDetail.status === "active" &&
            <Button
              type="button"
              category="primary"
              onClick={() => {
                activateModal('TO_BE_UPDATED', {
                  primaryAction: () => {},
                })
              }}
            >
              <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
                판매 중지
              </Text>
            </Button>            
          }
          { materialDetail.status === "reviewing" &&
            <Button
              type="button"
              category="primary"
              disabled
            >
              <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
                판매 검토중
              </Text>
            </Button>
          }
          { materialDetail.status === "ben" &&
            <Button
              type="button"
              category="primary"
              disabled
            >
              <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
                판매 보류
              </Text>
            </Button>
          }
        </ButtonWrapper>
      </StickyBottom>
    </>
  ) : (
    // skeleton
    <HomeMaterialDetailContainer>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate(-1)} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title=""
        icons={["", "",]}
      />

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

export default SellerMaterialDetail;
