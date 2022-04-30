import React from "react";
import styles from "./AddModal.module.css";

const AddModal = ({ setActiveAddModal, setMixList }) => {
    const [inputTitle, setInputTitle] = React.useState("");
    const [inputUrl, setInputUrl] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMixList((mixList) => [
          { id: mixList.length + 1, title: inputTitle, url: inputUrl },
          ...mixList,
        ]);
        setActiveAddModal(false);
    };

  return (
    <div className={styles.container}>
      <button className={styles["btn-close"]} onClick={() => setActiveAddModal(false)}>X</button>
      <section className={styles.modal}>
        <header className={styles.modal__header}>
          <h2 className={styles.modal__title}>Add new item</h2>
        </header>
        <form className={styles.modal__form} onSubmit={handleSubmit}>
          <label htmlFor="title" className={styles.modal__label}>
            Title
          </label>
          <input
            className={styles.modal__input}
            id="title"
            type="text"
            placeholder="Title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            required
          />
          <label htmlFor="url" className={styles.modal__label}>
            Link
          </label>
          <input
            className={styles.modal__input}
            id="url"
            type="url"
            placeholder="Video url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            required
          />
          <button type="submit">Add to list</button>
        </form>
      </section>
    </div>
  );
};

export default AddModal;
