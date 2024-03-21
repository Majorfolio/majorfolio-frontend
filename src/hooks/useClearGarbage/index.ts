import React, { useEffect } from 'react';
import useDraftStore from '../../store/useDraftStore';

export default function useClearGarbage() {
  const resetFile = useDraftStore((state) => state.resetFile);

  useEffect(() => {
    resetFile();
  }, []);
}
