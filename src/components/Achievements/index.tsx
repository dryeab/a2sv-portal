import Achievement from "./Achievement";
import AchievementBar from "./AchievementBar";

import styles from "@/styles/Achievements.module.css";

let turn = true;

const COLORS = {
  blue: "#00aeef",
  red: "#e91e63",
  yellow: "#ffc107",
  dark_blue: "#0a61f7",
  green: "#00e676",
};

export default function Achievements() {
  return (
    <div className={styles["achievement-whole-wrapper"]}>
      <div className={styles["achievements-header"]}>Achievements</div>
      <div className={styles["achievement-wrapper"]}>
        <div className={styles.achievements}>
          <Achievement
            body="We started the fourth group training and welcomed 207 students."
            time="December, 2022"
            timeToLeft={(turn = !turn)}
            color={COLORS.blue}
          />
          <Achievement
            body="Total number of placements is 31. Our students became interns and full-time workers in Google, Amazon, Linkedin, Palantir, Databricks & Bloomberg"
            time="August, 2022"
            timeToLeft={(turn = !turn)}
            color={COLORS.red}
          />
          <Achievement
            body="All 3 A2SV students who did internships at Google received and signed full-time software engineering offers with Google."
            time="
January, 2022"
            timeToLeft={(turn = !turn)}
            color={COLORS.yellow}
          />
          <Achievement
            body="We expanded to a second university in Ethiopia (Addis Ababa Science and Technology University) and started training 3 new groups of 100+ students both in AASTU and AAU."
            time="
December, 2021"
            timeToLeft={(turn = !turn)}
            color={COLORS.dark_blue}
          />
          <Achievement
            body="We formed interview partnerships with Google, LinkedIn, Palantir, Databricks, and InstaDeep."
            time="
October, 2021"
            timeToLeft={(turn = !turn)}
            color={COLORS.green}
          />
          <Achievement
            body="3 of our first group members got internship offers from Google"
            time="April, 2021
"
            timeToLeft={(turn = !turn)}
            color={COLORS.blue}
          />
          <Achievement
            body="59% of our first group of trainees passed Google internship interviews after the second round of training."
            time="January, 2021"
            timeToLeft={(turn = !turn)}
            color={COLORS.red}
          />
          <Achievement
            body="We started second group training with 35 new students."
            time="
December, 2020"
            timeToLeft={(turn = !turn)}
            color={COLORS.yellow}
          />
          <Achievement
            body="Our students created a COVID-19 tracking app called TrackSym for Ethiopia’s Ministry of Health."
            time="
October, 2020"
            timeToLeft={(turn = !turn)}
            color={COLORS.dark_blue}
          />
          <Achievement
            body="27% of our first group of trainees passed Google internship interviews after 3 months of training."
            time="March, 2020
"
            timeToLeft={(turn = !turn)}
            color={COLORS.green}
          />
          <Achievement
            body="We formed partnerships with Google, Palantir and Coinbase."
            time="
February, 2020"
            timeToLeft={(turn = !turn)}
            color={COLORS.blue}
          />
          <Achievement
            body="A2SV was founded in Ethiopia.

"
            time="
November, 2019
"
            timeToLeft={(turn = !turn)}
            color={COLORS.red}
          />
        </div>
        <div>
          <AchievementBar />
        </div>
      </div>
    </div>
  );
}
