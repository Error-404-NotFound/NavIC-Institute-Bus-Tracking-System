import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dash-board.module.css";
const DashBoard = () => {
  const navigate = useNavigate();

  const onMainTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEllipseIconClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardChild} />
      <div className={styles.dashboardItem} data-scroll-to="rectangle" />
      <div className={styles.mainMenu}>
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
          className={styles.mainMenuChild}
          alt=""
          src="/undefined9.png"
          onClick={onEllipseIconClick}
        />
        <div className={styles.welcomeuser}>Welcome,User</div>
      </div>
      <div className={styles.dashboardInner} />
      <b className={styles.dashboard2}>DashBoard</b>
      <img className={styles.lineIcon} alt="" src="/undefined15.png" />
      <img
        className={styles.materialSymbolsmenuIcon1}
        alt=""
        src="/undefined16.png"
      />
    </div>
  );
};

export default DashBoard;
