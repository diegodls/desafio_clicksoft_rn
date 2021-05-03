import React, {useState, createContext, useContext} from 'react';

export const AppContext = createContext({});

export const AppProvider = ({children}) => {
  const [modalState, setModalState] = useState('');
  const [idToDelete, setIdToDelete] = useState();

  function openModalDelete(id) {
    console.log('Abrindo Modal Delete');
    setModalState('delete');
    setIdToDelete(id);
    console.log(id);
  }

  function openModalError() {
    console.log('Abrindo Modal Error');
    setModalState('error');
  }

  function openModalSave() {
    console.log('Abrindo Modal Save');
    setModalState('save');
  }

  function closeModal() {
    setModalState('');
    setIdToDelete('');
  }

  return (
    <AppContext.Provider
      value={{
        idToDelete,
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
