import React, { useEffect, useRef, useState } from "react";
import ReactModal from "react-modal";
import { gsap } from "gsap";
import classes from "./Modal.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  opened: boolean;
  name: string;
}

ReactModal.setAppElement("#root");

export const Modal = ({ children, opened, name }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const modalRef = useRef<any>(null);

  const openModal = () => {
    setIsOpen(true);
    // todo: change animation using
    // modalRef.current.node

    if (!modalRef.current) return;
    gsap.fromTo(
      modalRef.current.node,
      { opacity: 0, autoAlpha: 0, zIndex: 2 },
      { opacity: 1, autoAlpha: 1, duration: 0.3, zIndex: 2 }
    );
  };
  const closeModal = () => {
    if (!modalRef.current) return;
    gsap.fromTo(
      modalRef.current.node,
      { opacity: 1 },
      { opacity: 0, duration: 0.3, onComplete: () => setIsOpen(false) }
    );
  };

  useEffect(() => {
    if (opened) openModal();
    else closeModal();
  }, [opened]);

  return (
    <div className={classes.Modal}>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel={name}
        overlayClassName={classes.overlay}
        className={classes.content}
        ref={modalRef}
      >
        {children}
      </ReactModal>
    </div>
  );
};
