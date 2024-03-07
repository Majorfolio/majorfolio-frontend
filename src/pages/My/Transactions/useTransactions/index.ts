import React, { useEffect, useState } from 'react';
import useAuthStore from '../../../../store/useAuthStore';
import Material from '../../../../components/home/Material/index.types';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';
import { getPurchases, getSales } from '../../../../apis/payment';
import usePagination from '../../../../hooks/common/usePagination';

export type TransactionMaterial = Pick<
  Material,
  'id' | 'className' | 'univ' | 'major'
> & {
  price: number;
  updateAt: string;
};

export type PurchaseKeys =
  | 'beforePay'
  | 'beforeRefund'
  | 'afterPay'
  | 'isDown'
  | 'cancel'
  | 'afterRefund';

export type PurchasesType = Partial<
  Record<PurchaseKeys, TransactionMaterial[]>
>;
// {
//   beforePay?: TransactionMaterial[];
//   beforeRefund?: TransactionMaterial[];
//   afterPay?: TransactionMaterial[];
//   isDown?: TransactionMaterial[];
//   cancel?: TransactionMaterial[];
//   afterRefund?: TransactionMaterial[];
// };

export type SaleKeys = 'pending' | 'complete';

export type SalesType = Partial<Record<SaleKeys, TransactionMaterial[]>>;

export default function useTransactions() {
  const accessToken = useAuthStore((store) => store.accessToken)!;
  const refreshPayload = useRefreshPayload();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const [purchases, setPurchases] = useState<PurchasesType>({});
  const [sales, setSales] = useState<SalesType>({});

  const {
    isLoading,
    nextPage,
    hasLastPageReached,
    bottomRef,
    canLoadMore,
    startLoading,
    finishLoading,
    reachLastPage,
  } = usePagination();

  const handleIntersection = async (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting && canLoadMore) {
      startLoading();

      if (selectedTab === 0) {
        const data = await getPurchases(
          nextPage,
          10,
          accessToken,
          refreshPayload,
        );
        console.log(data);
        if (data.status === 404) {
          finishLoading();
          reachLastPage();
          return;
        }
        const newPurchases: PurchasesType = data;
        setPurchases((currentPurchases) => ({
          ...currentPurchases,
          beforePay: [
            ...(currentPurchases.beforePay || []),
            ...(newPurchases.beforePay || []),
          ],
          afterPay: [
            ...(currentPurchases.afterPay || []),
            ...(newPurchases.afterPay || []),
          ],
          isDown: [
            ...(currentPurchases.isDown || []),
            ...(newPurchases.isDown || []),
          ],
          cancel: [
            ...(currentPurchases.cancel || []),
            ...(newPurchases.cancel || []),
          ],
          afterRefund: [
            ...(currentPurchases.afterRefund || []),
            ...(newPurchases.afterRefund || []),
          ],
        }));
      } else {
        const data = await getSales(nextPage, 10, accessToken, refreshPayload);
        if (data.code === 8001) {
          return;
        }
        const newSales: SalesType = data;
        setSales((currentSales) => ({
          ...currentSales,
          pending: [
            ...(currentSales.pending || []),
            ...(newSales.pending || []),
          ],
          complete: [
            ...(currentSales.complete || []),
            ...(newSales.complete || []),
          ],
        }));
      }

      finishLoading();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [
    isLoading,
    hasLastPageReached,
    canLoadMore,
    nextPage,
    startLoading,
    finishLoading,
    reachLastPage,
    sales,
    purchases,
    selectedTab,
  ]);

  return {
    isLoading,
    purchases,
    sales,
    selectedTab,
    setSelectedTab,
    bottomRef,
  };
}
