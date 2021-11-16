import React from "react";

export const Modal = ({ toggle }) => {
  return (
    <div className='modal-container p-5'>
      <div className='modal-title'>
        <div className='modal-title-text text-center'>
          <span>
            <b>Sucesso!</b>
          </span>
        </div>
        <div className='text-center'>
          <span>
            <b>Seu login foi realizado com sucesso!</b>
          </span>
        </div>
      </div>
      <div className='text-center pt-3'>
        <button onClick={toggle} className='btn btn-1 rounded-pill'>
          Continuar
        </button>
      </div>
    </div>
  );
};
