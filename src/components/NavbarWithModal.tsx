import React from 'react';
import Navbar from './Navbar';
import GetStartedModal from './GetStartedModal';
import { useGetStartedModal } from '@/hooks/useGetStartedModal';

const NavbarWithModal = () => {
  const { isOpen, openModal, closeModal } = useGetStartedModal();

  return (
    <>
      <Navbar onGetStartedClick={openModal} />
      <GetStartedModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default NavbarWithModal;
