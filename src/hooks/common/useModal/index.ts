import React, { useEffect, useRef, useState } from 'react';

export default function useModal() {
  const modalRef = useRef<HTMLDialogElement | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((currentIsModalOpen) => !currentIsModalOpen);
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      if (isModalOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [isModalOpen]);

  return { modalRef, toggleModal };
}
