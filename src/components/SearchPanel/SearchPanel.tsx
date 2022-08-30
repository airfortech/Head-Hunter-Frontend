import React, { useEffect, useState } from "react";
import { useSearch } from "../../hooks/useSearch";
import { PrimaryButton } from "../buttons/PrimaryButton/PrimaryButton";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { SortForm } from "./SortForm/SortForm";
import { FilterForm } from "./FilterForm/FilterForm";
import { UsersListType } from "../../types";
import { AddHrForm } from "../AddHrForm/AddHrForm";
import classes from "./SearchPanel.module.css";

type ModalTypes = "sortModal" | "filterModal" | "addHrModal";

interface Props {
  type: UsersListType;
}

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const SearchPanel = ({ type }: Props) => {
  const { search, setSearch, currentPages, setCurrentPages } = useSearch();
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
        ) : isModalOpen.modalType === "addHrModal" ? (
          <AddHrForm closeModal={() => closeModal("addHrModal")} />
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
          value={search[type]}
          onChange={(e) => {
            setSearch({ ...search, [type]: e.target.value });
            setCurrentPages({ ...currentPages, [type]: 1 });
          }}
        />
      ) : (
        <PrimaryButton
          size="large"
          color="primary"
          onClick={() => openModal("addHrModal")}
        >
          Dodaj użytkownika HR
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
