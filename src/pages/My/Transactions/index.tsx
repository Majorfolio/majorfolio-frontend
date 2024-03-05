import React, { useState } from 'react';
import { SecondaryTopbar } from '../../../components/common/TopBar';
import { ArrowBackDefaultIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import TapMenu, { SelectableTapMenu } from '../../../components/common/TapMenu';

export default function Transactions() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const topBar = (
    <SecondaryTopbar
      transition={
        <button type="button" onClick={() => {}} aria-label="prev">
          <ArrowBackDefaultIcon />
        </button>
      }
      title={
        <Text color="gray/gray900" size={18} weight="bold" lineHeight="sm">
          거래 내역
        </Text>
      }
    />
  );

  const tabBar = (
    <SelectableTapMenu
      labels={['구매 내역', '판매 내역']}
      selectedItem={selectedTab}
      onItemClick={(index) => setSelectedTab(index)}
    />
  );

  return (
    <>
      {topBar}
      {tabBar}
    </>
  );
}
