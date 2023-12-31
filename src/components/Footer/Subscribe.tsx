import styles from "@/styles/Subscribe.module.css";

export default function Subscribe() {
  return (
    <div className={styles.subscribe}>
      <h2>Subscribe to our newsletter!</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="subscribe-input"
          />
        </div>
        <div>
          <label htmlFor="first-name">First name</label>
          <input type="text" name="first-name" id="first-name" />
        </div>
        <div>
          <label htmlFor="last-name">Last name</label>
          <input type="text" name="last-name" id="last-name" />
        </div>
        <div className={styles["checkbox-wrapper"]}>
          <input type="checkbox" name="member" id="member" />
          <label htmlFor="member">
            Check if related to A2SV as a student, mentor or other
          </label>
        </div>
        <div>
          <button>Subscribe Now</button>
        </div>
      </form>
    </div>
  );
}
