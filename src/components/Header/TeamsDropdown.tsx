import styles from "@/styles/Teams.module.css";

export default function TeamsDropdown() {
  return (
    <div className={styles.dropdown}>
      <a href="/board">
        <div className={styles["dropdown-item"]}>Board Members</div>
      </a>
      <a href="/advisors">
        <div className={styles["dropdown-item"]}>Advisors/Mentors</div>
      </a>
      <a href="/executives">
        <div className={styles["dropdown-item"]}>Executives</div>
      </a>
      <a href="/staff">
        <div className={styles["dropdown-item"]}>Staff</div>
      </a>
      <a href="/placements">
        <div className={styles["dropdown-item"]}>Placements</div>
      </a>
      <a href="/groups">
        <div className={styles["dropdown-item"]}>Groups</div>
      </a>
    </div>
  );
}
