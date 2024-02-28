import React, { useEffect, useRef, useState } from 'react';
import { ModalCategoryType } from '../../../components/common/Modal';
import { CloseActionsType } from './index.types';

export default function useModal() {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [category, setCategory] = useState<ModalCategoryType | null>(null);
  const [closeActions, setCloseActions] = useState<CloseActionsType>({
    primaryAction: () => {},
    secondaryAction: () => {},
  });

  const { primaryAction, secondaryAction } = closeActions;

  const onToggle = () => {
    setIsModalOpen((currentIsModalOpen) => !currentIsModalOpen);
  };

  const activateModal = (
    newCategory: ModalCategoryType,
    newCloseActions: CloseActionsType,
  ) => {
    setCategory(newCategory);
    setCloseActions(newCloseActions);
    onToggle();
  };

  const closePrimarily = () => {
    primaryAction();
    onToggle();
  };

  const closeSecondarily = () => {
    if (secondaryAction) {
      secondaryAction();
    }
    onToggle();
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

  return {
    modalRef,
    category,
    activateModal,
    closePrimarily,
    closeSecondarily,
  };
}
