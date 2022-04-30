import React from 'react'

export const activeVideoContext = React.createContext();

export function ActiveVideoContextProvider({children}) {
  const [activeVideoModal, setActiveVideoModal] = React.useState("");

  function clearActiveVideoModal() {
    setActiveVideoModal("");
  }

  return (
    <activeVideoContext.Provider
      value={{
        activeVideoModal,
        setActiveVideoModal,
        clearActiveVideoModal,
      }}
    >
      {children}
    </activeVideoContext.Provider>
  );
}
