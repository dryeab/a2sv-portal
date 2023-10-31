import {
  EmailIcon,
  LinkedInIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  TwitterIcon,
} from "./icons";
import FooterIcon from "./FooterIcon";
import Subscribe from "./Subscribe";

import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Subscribe />
      <div>Follow us on social media</div>
      <div className={styles.icons}>
        <FooterIcon tip="Email">
          <EmailIcon />
        </FooterIcon>
        <FooterIcon tip="LinkedIn">
          <LinkedInIcon />
        </FooterIcon>
        <FooterIcon tip="Instagram">
          <InstagramIcon />
        </FooterIcon>
        <FooterIcon tip="Facebook">
          <FacebookIcon />
        </FooterIcon>
        <FooterIcon tip="Twitter">
          <TwitterIcon />
        </FooterIcon>
        <FooterIcon tip="YouTube">
          <YouTubeIcon />
        </FooterIcon>
      </div>
      <div className={styles.copyright}>
        © Copyright 2023 <strong>A2SV Foundation</strong>. All rights reserved.
        <a href="/privacy-policy">Privacy Policy</a>|
        <a href="/cookie-policy">Cookie Policy</a>
      </div>
    </footer>
  );
}
