import React from 'react';
import './Modal.css';

export const Modal = ({ open, setOpen, children }) => {
  return (
    <div
      className={open ? 'modal active' : 'modal'}
      onClick={(e) => setOpen(false)}
    >
      <div
        className={open ? 'modal__content active' : 'modal__content'}
        onclick={(e) => e.stopPropaganation()}
      >
        {children}
      </div>
    </div>
  );
};
