import React from 'react';

import {
  CardTitleWrapper,
  CardWrapper,
  InfoWrapper,
  InfosWrapper,
  MaterialPriceWrapper,
} from './index.styles';
import Text from '../../common/Text';
import AllCheckbox from '../../common/AllCheckbox';
import {
  SchoolDefaultIcon,
  DepartmentOutlinedIcon,
  SemesterDefaultIcon,
  ClassDefaultIcon,
} from '../../../assets/icons';
import { MaterialDetail } from '../Material/index.types';

interface PaymentPostCardProps {
  isCart: boolean;
  materialInfo?: MaterialDetail;
}

function PaymentPostCard({ isCart, materialInfo }: PaymentPostCardProps) {
  return materialInfo ? (
    <CardWrapper>
      <CardTitleWrapper>
        <Text size={20} weight="bold" lineHeight="sm" color="gray/gray900">
          {' '}
          {materialInfo.title}{' '}
        </Text>
        {isCart ? <AllCheckbox checked={false} /> : null}
      </CardTitleWrapper>

      <InfosWrapper>
        <InfoWrapper>
          <SchoolDefaultIcon />
          <Text size={14} color="gray/gray500">
            {' '}
            {materialInfo.univ}{' '}
          </Text>
        </InfoWrapper>

        <InfoWrapper>
          <DepartmentOutlinedIcon />
          <Text size={14} color="gray/gray500">
            {' '}
            {materialInfo.major}{' '}
          </Text>
        </InfoWrapper>

        <InfoWrapper>
          <SemesterDefaultIcon />
          <Text size={14} color="gray/gray500">
            {' '}
            {materialInfo.semester}{' '}
          </Text>
        </InfoWrapper>

        <InfoWrapper>
          <ClassDefaultIcon />
          <Text size={14} color="gray/gray500">
            {' '}
            {materialInfo.className}{' '}
          </Text>
        </InfoWrapper>
      </InfosWrapper>

      <MaterialPriceWrapper>
        <Text size={14} color="gray/gray500">
          자료 금액
        </Text>
        <Text weight="bold" color="gray/gray900">
          4,700원
        </Text>
      </MaterialPriceWrapper>
    </CardWrapper>
  ) : null;
}

export default PaymentPostCard;
