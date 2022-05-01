import React from "react";
import styles from './VideoModal.module.css'
import { GlobalContext } from "../../contexts/GlobalContext";

const VideoModal = ({}) => {
  const { setActiveVideoModal, activeVideoModal } =
    React.useContext(GlobalContext);

  return activeVideoModal?.title ? (
    <div className={styles.modal}>
      <button
        className={styles["btn-close"]}
        onClick={() => setActiveVideoModal(null)}
      >
        X
      </button>
      <h2>{activeVideoModal?.title}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${activeVideoModal.youtubeVideoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  ) : null;
};

export default VideoModal;
