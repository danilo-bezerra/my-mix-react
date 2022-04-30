import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import AddModal from "./components/AddModal/AddModal";
import VideoList from "./components/VideoList/VideoList";
import { ActiveVideoContextProvider } from "./contexts/activeVideoContext";
import VideoModal from "./components/VideoModal/VideoModal";

function App() {
  const [mixList, setMixList] = useState([]);
  const [activeAddModal, setActiveAddModal] = useState(false);

  return (
    <ActiveVideoContextProvider>
      <Header setActiveAddModal={setActiveAddModal} />
      <VideoList mixList={mixList} />
      {activeAddModal && (
        <AddModal
          setMixList={setMixList}
          setActiveAddModal={setActiveAddModal}
        />
      )}
      <VideoModal />
    </ActiveVideoContextProvider>
  );
}

export default App;
