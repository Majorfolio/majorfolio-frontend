import React, { useEffect, useState } from 'react';
import {
  CardTitleWrapper,
  CardsWrapper,
  MaterialBoxContainer,
  PageContainer,
} from './index.styles';
import HomeTagCardTitle from '../../components/home/HomeTagCardTitle';
import HomeMaterialCard from '../../components/home/HomeMaterialCard';
import TapMenu from '../../components/common/TapMenu';
import BottomBar from '../../components/common/BottomBar';
import useAuthStore from '../../store/useAuthStore';
import getPurchaseInfo from '../../apis/library';
import useRefreshPayload from '../../hooks/common/useRefreshPayload';

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
  const [materialsByState, setMaterialsByState] = useState<null | {
    beforePay: PurchasedItemType[];
    afterPay: PurchasedItemType[];
    buyComplete: PurchasedItemType[];
  }>(null);

  const refreshPayload = useRefreshPayload();

  useEffect(() => {
    const asyncEffect = async () => {
      const { beforePay, afterPay, buyComplete } = await getPurchaseInfo(
        1,
        10,
        accessToken,
        refreshPayload,
      );
      setMaterialsByState({
        beforePay,
        afterPay,
        buyComplete,
      });
    };

    asyncEffect();
  }, []);

  return (
    <PageContainer>
      <MaterialBoxContainer>
        <TapMenu />
        <CardTitleWrapper>
          <HomeTagCardTitle title="결제 대기" isViewAll />
          {}
        </CardTitleWrapper>
        <CardsWrapper>
          {materialsByState?.beforePay?.map((material) => (
            <HomeMaterialCard
              key={material.id}
              isBig={false}
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
            />
          ))}
          {/* <HomeMaterialCard />
          <HomeMaterialCard />
          <HomeMaterialCard /> */}
        </CardsWrapper>

        <CardTitleWrapper>
          <HomeTagCardTitle title="결제 완료" isViewAll />
        </CardTitleWrapper>
        <CardsWrapper>
          {materialsByState?.afterPay?.map((material) => (
            <HomeMaterialCard
              key={material.id}
              isBig={false}
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
            />
          ))}
          {/* <HomeMaterialCard />
          <HomeMaterialCard />
          <HomeMaterialCard /> */}
        </CardsWrapper>
      </MaterialBoxContainer>

      <BottomBar />
    </PageContainer>
  );
};

export default MaterialBox;
