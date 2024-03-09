import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardTitleWrapper,
  CardsWrapper,
  MaterialBoxContainer,
} from './index.styles';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import TapMenu, { SelectableTapMenu } from '../../components/common/TapMenu';
import BottomBar, { Path } from '../../components/common/BottomBar';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import { getPurchaseInfo, getUploadInfo } from '../../apis/library';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';
import { PrimaryTopbar } from '../../components/common/TopBar';
import Modal from '../../components/common/Modal';
import useModal from '../../hooks/common/useModal';
import { CartDefaultIcon, NotificationDefaultIcon } from '../../assets/icons';
import Text from '../../components/common/Text';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import { downloadFile } from '../../apis/assignment';
import useRequireAuth from '../../hooks/common/useRequireAuth';

interface PurchasedItemType {
  id: number;
  member_id: number;
  member_profile_image: string;
  nickname: string;
  className: string;
  univ: string;
  major: string;
  semester: string;
  professor: string;
  like: number;
  updateDate: string;
  buyInfoId: number;
}

const MaterialBox = () => {
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Member,
    AuthLevel.Member,
  );
  const [materialsByState, setMaterialsByState] = useState<null | {
    beforePay: PurchasedItemType[];
    afterPay: PurchasedItemType[];
    downloadComplete: PurchasedItemType[];
  }>(null);
  const [uploadedMaterialsByState, setUploadedMaterialsByState] =
    useState<null | {
      stopList: PurchasedItemType[];
      onSaleList: PurchasedItemType[];
    }>(null);
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const navigate = useNavigate();

  const refreshPayload = useRefreshPayload();

  const handleBeforePayClick = (materialId: number) => {
    navigate(`/RemittanceAdvice/`); // TODO: 수정 필요 (RemittanceAdvice는 주문번호로 이동해야 함)
  };

  const handleAfterPayClick = (materialId: number) => {
    activateModal('DOWNLOAD_PAID_MATERIAL', {
      primaryAction: () => {},
      secondaryAction: () => {
        downloadFile(materialId, accessToken, refreshPayload)
          .then((downloadLink) => {
            window.open(downloadLink);
          })
          .catch((error) => {
            console.error(
              '다운로드 링크를 가져오는 중에 오류가 발생했습니다:',
              error,
            );
          });
      },
    });
  };

  const handleDownloadCompleteClick = (materialId: number) => {
    activateModal('DOWNLOAD_PURCHASED_MATERIAL', {
      primaryAction: () => {
        navigate(`/assignment/${materialId}/detail`);
      },
      secondaryAction: () => {
        downloadFile(materialId, accessToken, refreshPayload)
          .then((downloadLink) => {
            window.open(downloadLink);
          })
          .catch((error) => {
            console.error(
              '다운로드 링크를 가져오는 중에 오류가 발생했습니다:',
              error,
            );
          });
      },
    });
  };

  const handleStopListClick = () => {
    // 자료수정으로 이동
  };

  const handleOnSaleListClick = () => {
    // 자료수정으로 이동
  };

  useEffect(() => {
    const asyncEffect = async () => {
      const { beforePay, afterPay, downloadComplete } = await getPurchaseInfo(
        1,
        10,
        accessToken,
        refreshPayload,
      );
      setMaterialsByState({
        beforePay,
        afterPay,
        downloadComplete,
      });

      const { stopList, onSaleList } = await getUploadInfo(
        1,
        10,
        accessToken,
        refreshPayload,
      );
      setUploadedMaterialsByState({
        stopList,
        onSaleList,
      });
    };

    asyncEffect();
  }, []);

  if (!isAuthLevelSatisfied) {
    return <span />;
  }

  return (
    <>
      <PrimaryTopbar
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            자료함
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
      <MaterialBoxContainer>
        <SelectableTapMenu
          labels={['구매', '판매']}
          selectedItem={selectedTab}
          onItemClick={(index) => setSelectedTab(index)}
        />
        {selectedTab === 0 && (
          <>
            <CardTitleWrapper>
              <HomeTagCardTitle title="결제 대기" isViewAll />
              {}
            </CardTitleWrapper>
            <CardsWrapper>
              {materialsByState?.beforePay.map((material) => (
                <HomeMaterialCard
                  key={material.id}
                  isBig
                  id={material.id}
                  memberId={material.member_id}
                  imageUrl={material.member_profile_image}
                  nickname={material.nickname}
                  className={material.className}
                  univ={material.univ}
                  major={material.major}
                  semester={material.semester}
                  professor={material.professor}
                  like={material.like}
                  header={
                    <MaterialSellerProfile
                      nickname={material.nickname}
                      hasReaction={false}
                      infoContent={material.updateDate
                        .split('T')[0]
                        .replace(/-/g, '. ')}
                      infoName="구매"
                    />
                  }
                  onClick={() => handleBeforePayClick(material.id)}
                />
              ))}
            </CardsWrapper>

            <CardTitleWrapper>
              <HomeTagCardTitle title="결제 완료" isViewAll />
            </CardTitleWrapper>
            <CardsWrapper>
              {materialsByState?.afterPay.map((material) => (
                <HomeMaterialCard
                  key={material.id}
                  isBig
                  id={material.id}
                  memberId={material.member_id}
                  imageUrl={material.member_profile_image}
                  nickname={material.nickname}
                  className={material.className}
                  univ={material.univ}
                  major={material.major}
                  semester={material.semester}
                  professor={material.professor}
                  like={material.like}
                  header={
                    <MaterialSellerProfile
                      nickname={material.nickname}
                      hasReaction={false}
                      infoContent={material.updateDate
                        .split('T')[0]
                        .replace(/-/g, '. ')}
                      infoName="판매"
                    />
                  }
                  onClick={() => handleAfterPayClick(material.id)}
                />
              ))}
            </CardsWrapper>

            <CardTitleWrapper>
              <HomeTagCardTitle title="구매 완료" isViewAll />
            </CardTitleWrapper>
            <CardsWrapper>
              {materialsByState?.downloadComplete.map((material) => (
                <HomeMaterialCard
                  key={material.id}
                  isBig
                  id={material.id}
                  memberId={material.member_id}
                  imageUrl={material.member_profile_image}
                  nickname={material.nickname}
                  className={material.className}
                  univ={material.univ}
                  major={material.major}
                  semester={material.semester}
                  professor={material.professor}
                  like={material.like}
                  header={
                    <MaterialSellerProfile
                      nickname={material.nickname}
                      hasReaction={false}
                      infoContent={material.updateDate
                        .split('T')[0]
                        .replace(/-/g, '. ')}
                      infoName="판매"
                    />
                  }
                  onClick={() => handleDownloadCompleteClick(material.id)}
                />
              ))}
            </CardsWrapper>
          </>
        )}
        {selectedTab === 1 && (
          <>
            <CardTitleWrapper>
              <HomeTagCardTitle title="판매 대기" isViewAll />
              {}
            </CardTitleWrapper>
            <CardsWrapper>
              {uploadedMaterialsByState?.stopList.map((material) => (
                <HomeMaterialCard
                  key={material.id}
                  isBig
                  id={material.id}
                  memberId={material.member_id}
                  imageUrl={material.member_profile_image}
                  nickname={material.nickname}
                  className={material.className}
                  univ={material.univ}
                  major={material.major}
                  semester={material.semester}
                  professor={material.professor}
                  like={material.like}
                  header={
                    <MaterialSellerProfile
                      nickname={material.nickname}
                      hasReaction={false}
                      infoContent={material.updateDate
                        .split('T')[0]
                        .replace(/-/g, '. ')}
                      infoName="판매"
                    />
                  }
                  onClick={handleStopListClick}
                />
              ))}
            </CardsWrapper>

            <CardTitleWrapper>
              <HomeTagCardTitle title="판매중" isViewAll />
            </CardTitleWrapper>
            <CardsWrapper>
              {uploadedMaterialsByState?.onSaleList.map((material) => (
                <HomeMaterialCard
                  key={material.id}
                  isBig
                  id={material.id}
                  memberId={material.member_id}
                  imageUrl={material.member_profile_image}
                  nickname={material.nickname}
                  className={material.className}
                  univ={material.univ}
                  major={material.major}
                  semester={material.semester}
                  professor={material.professor}
                  like={material.like}
                  header={
                    <MaterialSellerProfile
                      nickname={material.nickname}
                      hasReaction={false}
                      infoContent={material.updateDate
                        .split('T')[0]
                        .replace(/-/g, '. ')}
                      infoName="구매"
                    />
                  }
                  onClick={handleOnSaleListClick}
                />
              ))}
            </CardsWrapper>
          </>
        )}
      </MaterialBoxContainer>

      <BottomBar currentPath={Path.MaterialBox} />

      <Modal
        modalRef={modalRef}
        category={modalCategory}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </>
  );
};

export default MaterialBox;
