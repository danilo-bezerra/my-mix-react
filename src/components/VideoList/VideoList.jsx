import React from 'react'
import styles from './VideoList.module.css'
import VideoItem from '../VideoItem/VideoItem'

const VideoList = ({ mixList }) => {

  return (
    <section className={styles.section}>
      <h2>Video list</h2>
      <ul className={styles.list}>
        {mixList.map(item => (
            <VideoItem key={item.id}item={item}/>
        ))}
      </ul>
    </section>
  );
};

export default VideoList