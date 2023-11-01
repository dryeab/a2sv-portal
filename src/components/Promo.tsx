import styles from "@/styles/Promo.module.css";

export default function Promo() {
  return (
    <div className={styles.promo} id="promo">
      <div>
        <video
          className={styles.video}
          data-v-325b2118=""
          id="videoBG"
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          playsinline=""
        >
          <source data-v-325b2118="" src="/assets/promo-video-small.mp4" />
        </video>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path d="M16.59,5.59L18,7L12,13L6,7L7.41,5.59L12,10.17L16.59,5.59M16.59,11.59L18,13L12,19L6,13L7.41,11.59L12,16.17L16.59,11.59Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
