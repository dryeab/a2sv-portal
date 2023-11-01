import { useSelector } from "react-redux";
import Achievements from "./Achievements";
import styles from "@/styles/Main.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <Achievements />
      </div>
    </>
  );
}
