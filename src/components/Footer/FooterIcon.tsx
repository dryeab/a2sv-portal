import React from "react";

import styles from "@/styles/Footer.module.css";

export default function FooterIcon({
  children,
  tip,
}: {
  children: React.ReactElement;
  tip: string;
}) {
  return (
    <div className={styles["icon-wrapper"]}>
      {children}
      <div className={styles.tooltip}>{tip}</div>
    </div>
  );
}
