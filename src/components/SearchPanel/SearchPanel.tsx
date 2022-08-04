import React, { useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { SortForm } from "./SortForm/SortForm";
import classes from "./SearchPanel.module.css";

export const SearchPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={classes.SearchPanel}>
      <Modal opened={isModalOpen} name="Sort Modal">
        <SortForm closeModal={closeModal} />
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
          onClick={openModal}
        >
          Sortowanie
        </PrimaryButton>
        <PrimaryButton size="large" color="tertiary" icon="filter">
          Filtrowanie
        </PrimaryButton>
      </div>
    </div>
  );
};
