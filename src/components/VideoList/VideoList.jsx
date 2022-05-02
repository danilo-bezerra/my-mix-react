import React from 'react'
import styles from './VideoList.module.css'
import VideoItem from '../VideoItem/VideoItem'
import { GlobalContext } from '../../contexts/GlobalContext';

const VideoList = () => {
  const { mixList} = React.useContext(GlobalContext);

  if (mixList.length > 0) {
    return (
      <section className={styles.section}>
        <h2>Video list</h2>
        <ul className={styles.list}>
          {mixList.map((item) => (
            <VideoItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    );
  } else {
    return (
      <section className={styles.section}>
        <h2>Video list</h2>
        <p>No videos</p>
      </section>
    );
  }
};

export default VideoList