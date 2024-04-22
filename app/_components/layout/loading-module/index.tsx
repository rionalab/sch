import styles from "./styles.module.scss";

export function LoadingModule() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <div className={styles.imgContainer}>
        <img className={styles.img} alt="a" src={"/images/logo.png"} />

        <p>Loading...</p>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
