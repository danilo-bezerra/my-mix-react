import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import AddModal from "./components/AddModal/AddModal";
import VideoList from "./components/VideoList/VideoList";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import VideoModal from "./components/VideoModal/VideoModal";

function App() {
  const [mixList, setMixList] = useState([]);
  const [activeAddModal, setActiveAddModal] = useState(false);

  return (
    <GlobalContextProvider>
      <Header setActiveAddModal={setActiveAddModal} />
      <VideoList/>
      {activeAddModal && (
        <AddModal
          setMixList={setMixList}
          setActiveAddModal={setActiveAddModal}
        />
      )}
      <VideoModal />
    </GlobalContextProvider>
  );
}

export default App;
