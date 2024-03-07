import React, { FormEvent, useState } from 'react';

export default function useFormSubmission(
  submitCallback: () => Promise<unknown>,
) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    await submitCallback();
    setIsSubmitting(false);
  };

  return { isSubmitting, handleSubmit };
}
