import styles from "@/styles/Achievements.module.css";

export default function AchievementBar() {
  return (
    <div className={styles["achievement-bar"]}>
      <svg data-v-325b2118="" viewBox="0 0 300 419.5">
        <defs>
          <linearGradient
            id="59"
            gradientUnits="userSpaceOnUse"
            x1="100%"
            y1="0"
            x2="0"
            y2="0"
          >
            <stop offset="0" stop-color="#05E576"></stop>
            <stop offset="0.3333333333333333" stop-color="#05AEEE"></stop>
            <stop offset="0.6666666666666666" stop-color="#0D60F7"></stop>
            <stop offset="1" stop-color="#ff0000"></stop>
          </linearGradient>
        </defs>
        <clipPath id="sparkline-bar-59-clip">
          <rect
            x="5"
            y="388.57142857142856"
            width="65"
            height="11.428571428571429"
            rx="4"
            ry="4"
          ></rect>
          <rect
            x="80"
            y="245.71428571428572"
            width="65"
            height="154.28571428571428"
            rx="4"
            ry="4"
          ></rect>
          <rect
            x="155"
            y="62.85714285714283"
            width="65"
            height="337.14285714285717"
            rx="4"
            ry="4"
          ></rect>
          <rect x="230" y="0" width="65" height="400" rx="4" ry="4"></rect>
        </clipPath>
        <g>
          <text x="37.5" y="409.75" font-size="13">
            2%
          </text>
          <text x="112.5" y="409.75" font-size="13">
            27%
          </text>
          <text x="187.5" y="409.75" font-size="13">
            59%
          </text>
          <text x="262.5" y="409.75" font-size="13">
            70%
          </text>
        </g>
        <g clip-path="url(#sparkline-bar-59-clip)" fill="url(#59)">
          <rect x="0" y="0" width="300" height="400"></rect>
        </g>
      </svg>
    </div>
  );
}
