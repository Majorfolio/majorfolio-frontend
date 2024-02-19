import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { DetailContainer, HomeMaterialDetailContainer, PageContainer, ProfileWrapper, StatisticsNumberWrapper } from './index.styles';
import MaterialDetailPreview from '../../components/home/MaterialDetailPreview';
import MaterialSellerProfile from '../../components/home/MaterialSellerProfile';
import MaterialDetailPost from '../../components/home/MaterialDetailPost';
import MaterialDetailInfo from '../../components/home/MaterialDetailInfo';
import AllDivider from '../../components/common/AllDivider';
import AllDividerThin from '../../components/common/AllDividerThin';
import { getMaterialDetail } from '../../apis/materials';
import { MaterialDetail } from '../../components/home/Material/index.types';
import MaterialPostStatisticsNumber from '../../components/home/MaterialPostStatisticsNumber';

const HomeMaterialDetail = () => {
  const [materialDetail, setMaterialDetail] = useState<null | MaterialDetail>(null);
  const { materialId } = useParams();

  useEffect(() => {
    if(materialId){      
      getMaterialDetail(parseInt(materialId, 10)).then((response) => {
        if (response.result) {
          setMaterialDetail(response.result);
        }
      });
    }
  }, [materialDetail]);

  return (
    materialDetail ? (
      <PageContainer>
        {/* 상단바 위치 */}

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
       
      </PageContainer>

    ) : (
      // skeleton
      <HomeMaterialDetailContainer>
        <MaterialDetailPreview image='' />

        <ProfileWrapper>
          <MaterialSellerProfile nickname='-' hasReaction={false} />
        </ProfileWrapper>
        <AllDividerThin />

        <MaterialDetailPost
          title='-'
          content='-'
          updateTime='-'
        />
        
        <AllDivider />

        <StatisticsNumberWrapper>
              <MaterialPostStatisticsNumber
                sell={0}
                follower={0}
                reaction={0}
              />          
            </StatisticsNumberWrapper>

            <AllDivider />

        <MaterialDetailInfo 
          title=''
          university=''
          major=''
          semester=''
          subjectTitle=''
          professor=''
          grade=''
          score={0}
          pages={0}
        />           

      </HomeMaterialDetailContainer>
    )

  )
}

export default HomeMaterialDetail