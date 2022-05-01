import React from "react";
import styles from "./VideoItem.module.css";
import { GlobalContext } from "../../contexts/GlobalContext";

const VideoItem = ({ item }) => {
  const youtubeVideoId = item.url.includes("https://youtu.be/")
    ? item.url.replace("https://youtu.be/", "")
    : item.url.replace("https://www.youtube.com/watch?v=", "");

  const { setActiveVideoModal, deleteVideo } = React.useContext(GlobalContext);

  function handleClick() {
    console.log("clicked", item.title, youtubeVideoId);
    setActiveVideoModal({
      title: item.title,
      youtubeVideoId,
    });
  }

  return (
    <li className={styles.videoItem} onClick={handleClick}>
      <div className={styles.thumbnail}>
        <img
          src={`http://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
          alt="Youtube thumbnail"
        />
      </div>
      <div>
        <h3 className={styles.h3}>{item.title}</h3>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteVideo(item.id);
          }}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </li>
  );
};

export default VideoItem;
