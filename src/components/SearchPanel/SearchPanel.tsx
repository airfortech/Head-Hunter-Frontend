import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { SortForm } from "./SortForm/SortForm";
import { FilterForm } from "./FilterForm/FilterForm";
import classes from "./SearchPanel.module.css";

type ModalTypes = "sortModal" | "filterModal";

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const SearchPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState<IsModalOpen>({
    active: false,
  });

  const openModal = (modalType: ModalTypes) =>
    setIsModalOpen({
      active: true,
      modalType,
    });
  const closeModal = (modalType: ModalTypes) =>
    setIsModalOpen({
      active: false,
      modalType,
    });

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen]);

  return (
    <div className={classes.SearchPanel}>
      <Modal opened={isModalOpen.active} name="Sort Modal">
        {isModalOpen.modalType === "sortModal" ? (
          <SortForm closeModal={() => closeModal("sortModal")} />
        ) : isModalOpen.modalType === "filterModal" ? (
          <FilterForm closeModal={() => closeModal("filterModal")} />
        ) : (
          <div></div>
        )}
      </Modal>
      <Input
        type="text"
        size="large"
        color="secondary"
        icon="search"
        placeholder="Szukaj"
      />
      <div className={classes.actions}>
        <PrimaryButton
          size="large"
          color="tertiary"
          icon="sort"
          onClick={() => openModal("sortModal")}
        >
          Sortowanie
        </PrimaryButton>
        <PrimaryButton
          size="large"
          color="tertiary"
          icon="filter"
          onClick={() => openModal("filterModal")}
        >
          Filtrowanie
        </PrimaryButton>
      </div>
    </div>
  );
};
