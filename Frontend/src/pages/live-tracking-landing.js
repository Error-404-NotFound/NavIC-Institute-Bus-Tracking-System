import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./live-tracking-landing.module.css";
const LiveTrackingLanding = () => {
  const navigate = useNavigate();

  const onMainTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onEllipseIconClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className={styles.liveTrackingLanding}>
      <div className={styles.liveTrackingLandingChild} />
      <div className={styles.mainMenu}>
        <div className={styles.mainMenuChild} />
        <img className={styles.image1Icon} alt="" src="/undefined8.png" />
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
          className={styles.mainMenuItem}
          alt=""
          src="/undefined9.png"
          onClick={onEllipseIconClick}
        />
        <div className={styles.welcomeuser}>Welcome,User</div>
      </div>
      <div className={styles.map}>
        <div className={styles.mapChild} />
        <img className={styles.image4Icon} alt="" src="/undefined10.png" />
      </div>
      <div className={styles.menuDrop}>
        <div className={styles.mdibus1} />
        <div className={styles.menuDropChild} />
        <b className={styles.bus1}>BUS -1</b>
      </div>
      <div className={styles.stop}>
        <img className={styles.mdibusIcon2} alt="" src="/undefined7.png" />
        <div className={styles.stopChild} />
        <div className={styles.adress}>Adress</div>
        <div className={styles.div}>4:05</div>
        <b className={styles.currentStop}>Current Stop</b>
        <img className={styles.stopItem} alt="" src="/undefined17.png" />
        <img
          className={styles.mingcutetimeFillIcon2}
          alt=""
          src="/undefined18.png"
        />
        <img
          className={styles.streamlinemailSignAtEmailIcon2}
          alt=""
          src="/undefined19.png"
        />
      </div>
      <div className={styles.stop1}>
        <img className={styles.mdibusIcon2} alt="" src="/undefined7.png" />
        <div className={styles.stopChild} />
        <div className={styles.adress}>Adress</div>
        <div className={styles.div}>4:05</div>
        <b className={styles.nextStop}>Next Stop</b>
        <img className={styles.stopItem} alt="" src="/undefined17.png" />
        <img
          className={styles.mingcutetimeFillIcon2}
          alt=""
          src="/undefined18.png"
        />
        <img
          className={styles.streamlinemailSignAtEmailIcon2}
          alt=""
          src="/undefined19.png"
        />
      </div>
    </div>
  );
};

export default LiveTrackingLanding;
