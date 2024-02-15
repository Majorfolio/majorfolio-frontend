import React, { useState } from 'react';

export default function useSearchQueries() {
  const [searchQueries, setSearchQueries] = useState<{
    school: string;
    admissionYear: string;
    major: string;
    minor: string;
  }>({
    school: '',
    admissionYear: '',
    major: '',
    minor: '',
  });

  const { school, admissionYear, major, minor } = searchQueries;

  const createSearchQueryUpdater = (field: string) => (value: string) => {
    setSearchQueries((currentState) => ({
      ...currentState,
      [field]: value,
    }));
  };

  const isRequiredFieldEmpty = !(school && admissionYear && major);

  return {
    school,
    admissionYear,
    major,
    minor,
    createSearchQueryUpdater,
    isRequiredFieldEmpty,
  };
}
