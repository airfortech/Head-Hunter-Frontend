import { HrProfileEntity, UsersListType } from "../../../types";
import React, { useEffect, useRef, useState } from "react";
import { useSearch } from "../../../hooks/useSearch";
import { gsap } from "gsap";
import { PrimaryButton } from "../../buttons/PrimaryButton/PrimaryButton";
import { PreferencesCard } from "../../PreferencesCard/PreferencesCard";
import { Modal } from "../../Modal/Modal";
import { ConfirmationPrompt } from "../../ConfirmationPrompt/ConfirmationPrompt";
import { fetchDeleteUser } from "../../../utils/fetchDeleteuser";
import { EditHrForm } from "../../EditHrForm/EditHrForm";
import classes from "./UserItem.module.css";

interface Props {
  open?: boolean;
  type: UsersListType;
  data: HrProfileEntity;
}

type ModalTypes = "deleteUser" | "editHr" | "none";

interface IsModalOpen {
  active: boolean;
  modalType?: ModalTypes;
}

export const UserItemHr = ({ open = false, data }: Props) => {
  const [isDetailsOpen, setDetailsOpen] = useState(open);
  const iconRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<GSAPTimeline>();
  const [isModalOpen, setIsModalOpen] = useState<IsModalOpen>({
    active: false,
  });
  const { refreshList } = useSearch();

  const openModal = (modalType: ModalTypes) =>
    setIsModalOpen({
      active: true,
      modalType,
    });

  const closeModal = () =>
    setIsModalOpen({
      active: false,
      modalType: "none",
    });

  const { userId, email, fullName, company, maxReservedStudents } = data;

  const handleToggleDetails = () => {
    setDetailsOpen((prevState) => !prevState);
  };

  const handleDeleteUser = async () => {
    try {
      await fetchDeleteUser({ id: userId });
      closeModal();
      refreshList();
    } catch (e) {
      console.log(e);
      closeModal();
    }
  };

  useEffect(() => {
    const detailsItems = detailsRef.current?.children;

    if (!detailsItems?.length) return;

    tweenRef.current = gsap
      .timeline()
      .to(iconRef.current, {
        ease: "power2",
        rotation: 180,
        duration: 0.2,
      })
      .to(
        detailsRef.current,
        {
          ease: "power2",
          height: "auto",
          duration: 0.2,
        },
        "<+=0.1"
      )
      .fromTo(
        detailsItems,
        { opacity: 0 },
        {
          ease: "power2",
          opacity: 1,
          duration: 0.2,
          stagger: 0.018,
        },
        "<+=0.1"
      );
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (isDetailsOpen) {
      tweenRef.current?.play();
    } else {
      tweenRef.current?.reverse();
    }
  }, [isDetailsOpen]);

  return (
    <li className={classes.StudentItem}>
      <Modal opened={isModalOpen.active} name="Sort Modal">
        {isModalOpen.modalType === "deleteUser" ? (
          <ConfirmationPrompt
            title="Usuwanie użytkownika"
            question={`Czy na pewno usunąć użytkownika ${fullName}?`}
            closeModal={closeModal}
            onConfirm={handleDeleteUser}
          />
        ) : isModalOpen.modalType === "editHr" ? (
          <EditHrForm data={data} closeModal={closeModal} />
        ) : (
          <div></div>
        )}
      </Modal>
      <div className={classes.info}>
        <div className={classes.personal}>
          <p className={classes.name}>{fullName}</p>
        </div>
        <div className={classes.actions}>
          <PrimaryButton
            size="normal"
            fontColor="secondary"
            onClick={() => openModal("editHr")}
          >
            Edytuj
          </PrimaryButton>
          <PrimaryButton
            size="normal"
            fontColor="secondary"
            onClick={() => openModal("deleteUser")}
          >
            Usuń użytkownika
          </PrimaryButton>
          <button className={classes.button} onClick={handleToggleDetails}>
            <i className="bx bx-chevron-up" ref={iconRef}></i>
          </button>
        </div>
      </div>
      <div className={classes.details} ref={detailsRef}>
        <PreferencesCard title="Nazwa firmy:" value={company} flex={1.5} />
        <PreferencesCard title="E-mail:" value={email} flex={1.5} />
        <PreferencesCard
          title="Maksymalna liczba rezerwacji:"
          value={maxReservedStudents.toString()}
          flex={1.5}
        />
      </div>
    </li>
  );
};
