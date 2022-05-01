import React from 'react'
import styles from './Header.module.css'

const header = ({ setActiveAddModal = { setActiveAddModal } }) => {
  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <div className={styles.logo}>MYMIX</div>
        <button className={styles["btn-add"]} onClick={() => setActiveAddModal(true)}>
          ADD NEW
        </button>
      </div>
    </header>
  );
};

export default header