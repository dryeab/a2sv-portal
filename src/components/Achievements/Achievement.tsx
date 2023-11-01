import styles from "@/styles/Achievements.module.css";

export default function Achievement({
  time,
  body,
  color,
  timeToLeft,
}: {
  time: string;
  body: string;
  color: string;
  timeToLeft: boolean;
}) {
  return timeToLeft ? (
    <div className={styles.achievement}>
      <div className={styles["achievement-body"]}>{body}</div>
      <div className={styles["achievement-divider"]}>
        <div
          className={styles["achievement-circle"]}
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <div
        className={styles["achievement-time"]}
        style={{
          textAlign: timeToLeft ? "left" : "right",
        }}
      >
        {time}
      </div>
    </div>
  ) : (
    <div className={styles.achievement}>
      <div
        className={styles["achievement-time"]}
        style={{
          textAlign: timeToLeft ? "left" : "right",
        }}
      >
        {time}
      </div>

      <div className={styles["achievement-divider"]}>
        <div
          className={styles["achievement-circle"]}
          style={{
            backgroundColor: color,
          }}
        ></div>
      </div>
      <div className={styles["achievement-body"]}>{body}</div>
    </div>
  );
}
