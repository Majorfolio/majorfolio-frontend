import React, { FormEvent, useState, MouseEvent } from 'react';

export default function useFormSubmission(
  submitCallback: () => Promise<unknown>,
) {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (
    event?: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>,
  ) => {
    if (event) {
      event.preventDefault();
    }

    if (isSubmitting) return;
    setIsSubmitting(true);
    await submitCallback();
    setIsSubmitting(false);
  };

  return { isSubmitting, handleSubmit };
}
