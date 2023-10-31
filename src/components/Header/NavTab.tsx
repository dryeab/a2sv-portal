import styles from "@/styles/Header.module.css";

export default function NavTab({
  text,
  focused,
}: {
  text: string;
  focused: boolean;
}) {
  return (
    <>
      <div className={styles.navtab}>
        <div className={styles["navtab-text"]}>{text}</div>
        <div
          className={`${styles["navtab-slidder"]} ${
            focused ? `${styles["navtab-focused"]}` : ""
          }`}
        ></div>
      </div>
    </>
  );
}
