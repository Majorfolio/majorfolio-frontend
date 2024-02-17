import React, { useEffect, useRef, useState } from 'react';

export default function useModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onToggle = () => {
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

  return { modalRef, onToggle };
}
