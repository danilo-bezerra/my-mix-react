import React from 'react'

export const GlobalContext = React.createContext();

export function GlobalContextProvider({children}) {
  const [activeVideoModal, setActiveVideoModal] = React.useState("");
  const [mixList, setMixList] = React.useState([]);

  function clearActiveVideoModal() {
    setActiveVideoModal("");
  }

  function deleteVideo(id) {
    setMixList(mixList.filter(item => item.id !== id));
  }

  return (
    <GlobalContext.Provider
      value={{
        activeVideoModal,
        setActiveVideoModal,
        clearActiveVideoModal,
        mixList,
        setMixList,
        deleteVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
