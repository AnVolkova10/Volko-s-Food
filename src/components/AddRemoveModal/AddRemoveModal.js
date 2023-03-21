import React, { useState } from 'react';
import './AddRemoveModalStyles.scss';
import { Button, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import { AppContext } from '../../context/appContext';

export const AddRemoveModal = ({}) => {
  const { showModal, setShowModal } = useContext(AppContext);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className={showModal ? 'd-block' : 'd-none'}
      onHide={handleClose}
      backdrop='static'
      keyboard={false}
    >
      <header>
        <h1>Modal title</h1>
      </header>
      <section>
        <p>Modal body text goes here.</p>
      </section>
      <footer>
        <button onClick={handleClose}>Close</button>
        <button>Save changes</button>
      </footer>
    </div>
  );
};
