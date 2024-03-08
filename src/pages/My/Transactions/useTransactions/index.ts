import React, { useEffect, useState } from 'react';
import useAuthStore from '../../../../store/useAuthStore';
import Material from '../../../../components/home/Material/index.types';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';
import { getPurchases, getSales } from '../../../../apis/payment';
import usePagination from '../../../../hooks/common/usePagination';
import { RetryPayload } from '../../../../apis/member';

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

export type SaleKeys = 'pending' | 'complete';

export type SalesType = Partial<Record<SaleKeys, TransactionMaterial[]>>;

export type TransactionsType = PurchasesType & SalesType;

export default function useTransactions(
  loadNextContent: (
    pageNumber: number,
    pageSize: number,
    accessToken: string,
    refreshPayload: RetryPayload,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any>,
) {
  const accessToken = useAuthStore((store) => store.accessToken)!;
  const refreshPayload = useRefreshPayload();

  const [transactions, setTransactions] = useState<TransactionsType>({});

  const {
    isLoading,
    nextPage,
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

      const data = await loadNextContent(
        nextPage,
        10,
        accessToken,
        refreshPayload,
      );
      if (data.code === 3000 || data.code === 8001) {
        finishLoading();
        reachLastPage();
        return;
      }
      const newTransactions: PurchasesType & SalesType = data;
      setTransactions((currentTransactions) => ({
        ...currentTransactions,
        beforePay: [
          ...(currentTransactions?.beforePay || []),
          ...(newTransactions?.beforePay || []),
        ],
        afterPay: [
          ...(currentTransactions.afterPay || []),
          ...(newTransactions?.afterPay || []),
        ],
        isDown: [
          ...(currentTransactions.isDown || []),
          ...(newTransactions?.isDown || []),
        ],
        cancel: [
          ...(currentTransactions.cancel || []),
          ...(newTransactions?.cancel || []),
        ],
        afterRefund: [
          ...(currentTransactions.afterRefund || []),
          ...(newTransactions?.afterRefund || []),
        ],
        pending: [
          ...(currentTransactions.afterRefund || []),
          ...(newTransactions?.afterRefund || []),
        ],
        complete: [
          ...(currentTransactions.afterRefund || []),
          ...(newTransactions?.afterRefund || []),
        ],
      }));

      if (data.end === true) {
        reachLastPage();
      }
    }

    finishLoading();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (bottomRef.current) {
      if (isLoading) {
        observer.unobserve(bottomRef.current);
      } else {
        observer.observe(bottomRef.current);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [
    canLoadMore,
    nextPage,
    startLoading,
    finishLoading,
    reachLastPage,
    accessToken,
    refreshPayload,
    transactions,
  ]);

  // fix remove dependencies and prevent multiple invokations before isLoading gets updated

  return {
    isLoading,
    transactions,
    bottomRef,
  };
}
