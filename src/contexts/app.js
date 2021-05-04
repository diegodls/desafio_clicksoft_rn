import React, {useState, createContext, useContext} from 'react';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [modalState, setModalState] = useState('');

  function openModalDelete() {
    setModalState('delete');
  }

  function openModalError() {
    setModalState('error');
  }

  function openModalSave() {
    setModalState('save');
  }

  function closeModal() {
    setModalState('');
  }

  return (
    <AppContext.Provider
      value={{
        modalState,
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
