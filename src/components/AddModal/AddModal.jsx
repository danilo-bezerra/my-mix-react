import React from "react";
import styles from "./AddModal.module.css";
import { GlobalContext } from "../../contexts/GlobalContext";

const AddModal = ({ setActiveAddModal }) => {
  const { setMixList } = React.useContext(GlobalContext)
  const [inputTitle, setInputTitle] = React.useState("");
  const [inputUrl, setInputUrl] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      inputUrl.includes("https://www.youtube.com/watch?v=") ||
        inputUrl.includes("https://youtu.be/")
    );
    if (
      inputUrl.includes("https://www.youtube.com/watch?v=") ||
      inputUrl.includes("https://youtu.be/")
    ) {
      setMixList((mixList) => [
        { id: mixList.length + 1, title: inputTitle, url: inputUrl },
        ...mixList,
      ]);
      setActiveAddModal(false);
    } else {
      setError("Please insert a title and a valid Youtube URL");
    }
  };

  React.useEffect(() => {
    if (
      inputUrl.includes("https://www.youtube.com/watch?v=") ||
      inputUrl.includes("https://youtu.be/")
    ) {
      setError("");
    }
  }, [inputUrl]);

  return (
    <div className={styles.container}>
      <button
        className={styles["btn-close"]}
        onClick={() => setActiveAddModal(false)}
      >
        X
      </button>
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
          {error && <p className={styles.modal__error}>{error}</p>}
          <button type="submit">Add to list</button>
        </form>
      </section>
    </div>
  );
};

export default AddModal;
