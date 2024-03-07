import React, { useRef, useState } from 'react';

export default function usePagination() {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);
  const [hasLastPageReached, setHasLastPageReached] = useState(false);

  const canLoadMore = !isLoading && !hasLastPageReached;

  const goToNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const startLoading = () => {
    setIsLoading(true);
  };

  const finishLoading = () => {
    goToNextPage();
    setIsLoading(false);
  };

  const reachLastPage = () => {
    setHasLastPageReached(true);
  };

  const nextPage = page + 1;

  return {
    isLoading,
    nextPage,
    hasLastPageReached,
    bottomRef,
    canLoadMore,
    startLoading,
    finishLoading,
    reachLastPage,
  };
}
