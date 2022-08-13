import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { SortForm } from "./SortForm/SortForm";
import { FilterForm } from "./FilterForm/FilterForm";
import classes from "./SearchPanel.module.css";

type ModalTypes = "sortModal" | "filterModal";

interface Props {
  type?:
    | "adminHR"
    | "adminStudent"
    | "adminStudentAvailable"
    | "adminStudentToTalk"
    | "adminStudentHired"
    | "hrStudentAvailable"
    | "hrStudentToTalk"
    | "hrStudentHired";
}

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const SearchPanel = ({ type }: Props) => {
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

  const handleAddHR = () => {
    console.log("Add HR");
  };

  useEffect(() => {}, [isModalOpen]);

  return (
    <div className={classes.SearchPanel}>
      <Modal opened={isModalOpen.active} name="Sort Modal">
        {isModalOpen.modalType === "sortModal" ? (
          <SortForm type={type} closeModal={() => closeModal("sortModal")} />
        ) : isModalOpen.modalType === "filterModal" ? (
          <FilterForm
            type={type}
            closeModal={() => closeModal("filterModal")}
          />
        ) : (
          <div></div>
        )}
      </Modal>
      {type !== "adminHR" ? (
        <Input
          type="text"
          size="large"
          color="secondary"
          icon="search"
          placeholder="Szukaj"
        />
      ) : (
        <PrimaryButton
          size="large"
          color="primary"
          onClick={() => handleAddHR()}
        >
          Dodaj HRowca
        </PrimaryButton>
      )}
      {type !== "adminHR" && (
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
      )}
    </div>
  );
};
