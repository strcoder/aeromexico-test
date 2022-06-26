import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import './styles.scss';

type ModalProps = {
  show: boolean,
  title: string,
  onClose: Function,
  theme?: 'light' | 'dark',
  children: React.ReactElement,
}

const Modal = ({ show, onClose, children, title, theme = 'light' }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <section className='Modal'>
      <button
        type='button'
        onClick={handleCloseClick}
        className={`Modal__close ${theme}`}
      >
        Cerrar
      </button>
      <div className={`ModalWrap ${theme}`}>
        <div className={`ModalWrap__header ${theme}`}>
          {title && (
            <p className='single-line'><strong>{title}</strong></p>
          )}
          <button
            type='button'
            onClick={handleCloseClick}
            title='Cerrar ventana'
            className={`btn-link-${theme === 'light' ? 'danger' : 'soft'}`}
          >
            <FaTimes size={20} />
          </button>
        </div>
        <main className='ModalWrap__main'>
          {children}
        </main>
      </div>
    </section>
  ) : null;

  if (isBrowser && !document?.getElementById('modal')) {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
    const el = document.createElement('div');
    modalRoot.appendChild(el);

    return ReactDOM.createPortal(
      modalContent,
      el,
    );
  }

  if (document && typeof document !== 'undefined') {
    const modal = document.getElementById('modal');
    if (isBrowser && modal) {
      return ReactDOM.createPortal(
        modalContent,
        modal,
      );
    }
  }

  return null;
};

export default Modal;
