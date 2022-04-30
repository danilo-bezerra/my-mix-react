import React from 'react'
import styles from './VideoItem.module.css'
import { activeVideoContext } from "../../contexts/activeVideoContext";

const VideoItem = ({item}) => {
    const youtubeVideoId = item.url.includes("https://youtu.be/-")
        ? item.url.replace("https://youtu.be/", "")
        : item.url.replace("https://www.youtube.com/watch?v=", "");

    const {setActiveVideoModal} = React.useContext(activeVideoContext);


    function handleClick() {
        console.log("clicked", item.title, youtubeVideoId);
        setActiveVideoModal({
          title: item.title,
          youtubeVideoId,
        });
    }
    //item.url.replace("https://www.youtube.com/watch?v=", '')

    // console.log(item.url)
    // console.log('cortado: ',(item.url.split('/')[item.url.split('/').length - 1]))
    // console.log(item.url.includes("https://www.youtube.com/watch?v="));
    // console.log("id: ", item.url.replace("https://www.youtube.com/watch?v=", ''));

  return (
    <li className={styles.videoItem} onClick={handleClick}>
      <div className={styles.thumbnail}>
        <img
          src={`http://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
          alt="Youtube thumbnail"
        />
      </div>
      <h3 className={styles.h3}>{item.title}</h3>
    </li>
  );
}

export default VideoItem