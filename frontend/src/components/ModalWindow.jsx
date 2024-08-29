/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const ModalWindow = ({ primaryButton, modalContent }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const closeModal = useCallback(function () {
    setModalOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen, closeModal]);

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <div ref={modalRef} onClick={openModal}>
        {primaryButton}
      </div>
      {modalOpen &&
        createPortal(
          <div className="fixed inset-0 h-screen bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="flex flex-col items-center mt-32 justify-center ">
              <button
                onClick={closeModal}
                className=" place-self-center text-2xl text-white">
                X
              </button>
              {modalContent}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ModalWindow;
