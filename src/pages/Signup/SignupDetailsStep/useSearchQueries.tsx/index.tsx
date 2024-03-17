import React, { useState } from 'react';

export default function useSearchQueries() {
  const [searchQueries, setSearchQueries] = useState<{
    univ: string;
    admissionYear: string;
    major: string;
    minor: string;
  }>({
    univ: '',
    admissionYear: '',
    major: '',
    minor: '',
  });

  const { univ, admissionYear, major, minor } = searchQueries;

  const createSearchQueryUpdater = (field: string) => (value: string) => {
    setSearchQueries((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  const isRequiredFieldEmpty = !(univ && admissionYear && major);

  return {
    univ,
    admissionYear,
    major,
    minor,
    createSearchQueryUpdater,
    isRequiredFieldEmpty,
  };
}
