/* eslint-disable no-lone-blocks */
import React, {useState, createContext, useContext} from 'react';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [modalState, setModalState] = useState('');
  const [modalErrorTitle, setModalErrorTitle] = useState(null);
  const [modalErrorMessage, setModalErrorMessage] = useState(null);

  function openModalDelete() {
    setModalState('delete');
  }

  function openModalError(title, message) {
    {
      title ? setModalErrorTitle(title) : setModalErrorTitle('Erro!');
    }
    {
      message ? setModalErrorMessage(message) : setModalErrorMessage('Erro!');
    }
    setModalState('error');
  }

  function openModalSave() {
    setModalState('save');
  }

  function closeModal() {
    setModalState('');
    setModalErrorTitle(null);
    setModalErrorMessage(null);
  }

  return (
    <AppContext.Provider
      value={{
        modalState,
        modalErrorTitle,
        modalErrorMessage,
        openModalDelete,
        openModalError,
        openModalSave,
        closeModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  return context;
}

export default useApp;
