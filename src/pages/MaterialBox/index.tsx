import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { upload } from '@testing-library/user-event/dist/upload';
import {
  CardTitleWrapper,
  CardsWrapper,
  MaterialBoxContainer,
  NoMaterialTextWrapper,
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
import Button from '../../components/common/Button';
import Row from '../../components/common/Row';
import EmptyMaterialWrapper from '../../components/common/EmptyContentWrapper';

interface PurchasedItemType {
  id: number;
  memberId: number;
  imageUrl: string;
  nickName: string;
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

  const handleBeforePayClick = (buyInfoId: number) => {
    navigate(`/RemittanceAdvice/${buyInfoId}`);
  };

  const handleAfterPayClick = (materialId: number) => {
    activateModal('DOWNLOAD_PAID_MATERIAL', {
      primaryAction: () => {
        downloadFile(materialId, accessToken, refreshPayload)
          .then((data) => {
            const { result } = data;
            const { url } = result;
            window.open(url, '_blank', 'noopener,noreferrer');
          })
          .catch((error) => {
            console.error(
              '다운로드 링크를 가져오는 중에 오류가 발생했습니다:',
              error,
            );
          });
      },
      secondaryAction: () => {},
    });
  };

  const handleDownloadCompleteClick = (materialId: number) => {
    activateModal('DOWNLOAD_PURCHASED_MATERIAL', {
      primaryAction: () => {
        downloadFile(materialId, accessToken, refreshPayload)
          .then((data) => {
            const { result } = data;
            const { url } = result;
            window.open(url, '_blank', 'noopener,noreferrer');
          })
          .catch((error) => {
            console.error(
              '다운로드 링크를 가져오는 중에 오류가 발생했습니다:',
              error,
            );
          });
      },
      secondaryAction: () => {
        navigate(`/assignment/${materialId}/detail`);
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
          <div>
            {!materialsByState?.beforePay &&
            !materialsByState?.afterPay &&
            !materialsByState?.downloadComplete ? (
              <NoMaterialTextWrapper>
                <Text size={16} lineHeight="sm" color="gray/gray400">
                  자료함에 자료가 없어요.
                </Text>
              </NoMaterialTextWrapper>
            ) : (
              <div>
                {materialsByState?.beforePay &&
                  materialsByState?.beforePay.length !== 0 && (
                    <>
                      <CardTitleWrapper>
                        <HomeTagCardTitle title="결제 대기" isViewAll />
                        {}
                      </CardTitleWrapper>
                      <CardsWrapper>
                        {materialsByState?.beforePay?.map((material) => (
                          <HomeMaterialCard
                            key={material.id}
                            isBig
                            id={material.id}
                            memberId={material.memberId}
                            imageUrl={material.imageUrl}
                            nickName={material.nickName}
                            className={material.className}
                            univ={material.univ}
                            major={material.major}
                            semester={material.semester}
                            professor={material.professor}
                            like={material.like}
                            header={
                              <MaterialSellerProfile
                                nickName={material.nickName}
                                hasReaction={false}
                                infoContent={material.updateDate
                                  .split('T')[0]
                                  .replace(/-/g, '. ')}
                                infoName="구매"
                                memberId={material.memberId}
                              />
                            }
                            onClick={() =>
                              handleBeforePayClick(material.buyInfoId)
                            }
                          />
                        ))}
                      </CardsWrapper>
                    </>
                  )}

                {materialsByState?.afterPay &&
                  materialsByState?.afterPay.length !== 0 && (
                    <>
                      <CardTitleWrapper>
                        <HomeTagCardTitle title="결제 완료" isViewAll />
                      </CardTitleWrapper>
                      <CardsWrapper>
                        {materialsByState?.afterPay?.map((material) => (
                          <HomeMaterialCard
                            key={material.id}
                            isBig
                            id={material.id}
                            memberId={material.memberId}
                            imageUrl={material.imageUrl}
                            nickName={material.nickName}
                            className={material.className}
                            univ={material.univ}
                            major={material.major}
                            semester={material.semester}
                            professor={material.professor}
                            like={material.like}
                            header={
                              <MaterialSellerProfile
                                nickName={material.nickName}
                                hasReaction={false}
                                infoContent={material.updateDate
                                  .split('T')[0]
                                  .replace(/-/g, '. ')}
                                infoName="판매"
                                memberId={material.memberId}
                              />
                            }
                            onClick={() => handleAfterPayClick(material.id)}
                          />
                        ))}
                      </CardsWrapper>
                    </>
                  )}

                {materialsByState?.downloadComplete &&
                  materialsByState?.downloadComplete.length !== 0 && (
                    <>
                      <CardTitleWrapper>
                        <HomeTagCardTitle title="구매 완료" isViewAll />
                      </CardTitleWrapper>
                      <CardsWrapper>
                        {materialsByState?.downloadComplete?.map((material) => (
                          <HomeMaterialCard
                            key={material.id}
                            isBig
                            id={material.id}
                            memberId={material.memberId}
                            imageUrl={material.imageUrl}
                            nickName={material.nickName}
                            className={material.className}
                            univ={material.univ}
                            major={material.major}
                            semester={material.semester}
                            professor={material.professor}
                            like={material.like}
                            header={
                              <MaterialSellerProfile
                                nickName={material.nickName}
                                hasReaction={false}
                                infoContent={material.updateDate
                                  .split('T')[0]
                                  .replace(/-/g, '. ')}
                                infoName="판매"
                                memberId={material.memberId}
                              />
                            }
                            onClick={() =>
                              handleDownloadCompleteClick(material.id)
                            }
                          />
                        ))}
                      </CardsWrapper>
                    </>
                  )}
              </div>
            )}
          </div>
        )}

        {selectedTab === 1 && (
          <div>
            {uploadedMaterialsByState?.stopList?.length === 0 &&
            uploadedMaterialsByState?.onSaleList?.length === 0 ? (
              <NoMaterialTextWrapper>
                <Text size={16} lineHeight="sm" color="gray/gray400">
                  자료함에 자료가 없어요.
                </Text>
              </NoMaterialTextWrapper>
            ) : (
              <div>
                {uploadedMaterialsByState?.stopList &&
                  uploadedMaterialsByState?.stopList.length !== 0 && (
                    <>
                      <CardTitleWrapper>
                        <HomeTagCardTitle title="판매 대기" isViewAll />
                        {}
                      </CardTitleWrapper>
                      <CardsWrapper>
                        {uploadedMaterialsByState?.stopList?.map((material) => (
                          <HomeMaterialCard
                            key={material.id}
                            isBig
                            id={material.id}
                            memberId={material.memberId}
                            imageUrl={material.imageUrl}
                            nickName={material.nickName}
                            className={material.className}
                            univ={material.univ}
                            major={material.major}
                            semester={material.semester}
                            professor={material.professor}
                            like={material.like}
                            header={
                              <MaterialSellerProfile
                                nickName={material.nickName}
                                hasReaction={false}
                                infoContent={material.updateDate
                                  .split('T')[0]
                                  .replace(/-/g, '. ')}
                                infoName="판매"
                                memberId={material.memberId}
                              />
                            }
                            onClick={handleStopListClick}
                          />
                        ))}
                      </CardsWrapper>
                    </>
                  )}

                {uploadedMaterialsByState?.onSaleList &&
                  uploadedMaterialsByState?.onSaleList.length !== 0 && (
                    <>
                      <CardTitleWrapper>
                        <HomeTagCardTitle title="판매중" isViewAll />
                      </CardTitleWrapper>
                      <CardsWrapper>
                        {uploadedMaterialsByState?.onSaleList?.map(
                          (material) => (
                            <HomeMaterialCard
                              key={material.id}
                              isBig
                              id={material.id}
                              memberId={material.memberId}
                              imageUrl={material.imageUrl}
                              nickName={material.nickName}
                              className={material.className}
                              univ={material.univ}
                              major={material.major}
                              semester={material.semester}
                              professor={material.professor}
                              like={material.like}
                              header={
                                <MaterialSellerProfile
                                  nickName={material.nickName}
                                  hasReaction={false}
                                  infoContent={material.updateDate
                                    .split('T')[0]
                                    .replace(/-/g, '. ')}
                                  infoName="구매"
                                  memberId={material.memberId}
                                />
                              }
                              onClick={handleOnSaleListClick}
                            />
                          ),
                        )}
                      </CardsWrapper>
                    </>
                  )}
              </div>
            )}
          </div>
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
