import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./about.module.css";
const About = () => {
  const navigate = useNavigate();

  const onMainTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onEllipseIconClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <div className={styles.aboutChild} />
      <div className={styles.aboutItem} data-scroll-to="rectangle" />
      <img className={styles.image1Icon} alt="" src="/undefined20.png" />
      <div className={styles.aboutNavic}>About NavIC.....</div>
      <div className={styles.mainMenu}>
        <div className={styles.mainParent}>
          <div className={styles.main} onClick={onMainTextClick}>
            Main
          </div>
          <div className={styles.main} onClick={onAboutTextClick}>
            About
          </div>
          <div className={styles.main} onClick={onDashboardTextClick}>
            Dashboard
          </div>
          <div className={styles.adminPanel}>Admin Panel</div>
        </div>
        <b className={styles.busTracking}>BUS TRACKING</b>
        <img
          className={styles.mainMenuChild}
          alt=""
          src="/undefined9.png"
          onClick={onEllipseIconClick}
        />
        <div className={styles.welcomeuser}>Welcome,User</div>
      </div>
      <div className={styles.aboutNavic1}>About NavIC</div>
      <div className={styles.aboutInner} />
      <div className={styles.aboutUs}>
        <div className={styles.contactUs}>About Us</div>
        <div className={styles.aboutUsChild} />
      </div>
      <div className={styles.aboutUs2}>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.aboutUsChild} />
      </div>
      <div className={styles.icoutlineFacebookParent}>
        <img
          className={styles.icoutlineFacebookIcon1}
          alt=""
          src="/undefined21.png"
        />
        <img className={styles.vectorIcon2} alt="" src="/undefined22.png" />
        <img className={styles.vectorIcon3} alt="" src="/undefined23.png" />
      </div>
    </div>
  );
};

export default About;
