import React, { useEffect, useReducer, useState, createContext } from 'react';
import Reducer from '../context/Reducer';
//Ejemplo
const initialContext = {
  appState: false,
};
export const AppContext = createContext(initialContext);

export const ContextProviderApp = (props) => {
  //Ejemplo
  const [appState, setAppState] = useReducer(Reducer, initialContext);
  const [showModal, setShowModal] = useState(false);

  //Ejemplo
  const settingState = () => {
    setAppState({
      type: 'SET_STATE',
      payload: true,
    });
  };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        settingState,
        showModal,
        setShowModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
