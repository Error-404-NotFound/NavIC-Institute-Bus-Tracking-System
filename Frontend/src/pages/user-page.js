import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./user-page.module.css";
const UserPage = () => {
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
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.userPage}>
      <div className={styles.userPageChild} />
      <div className={styles.userPageItem} data-scroll-to="rectangle" />
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
      <b className={styles.dashboard1}>DashBoard</b>
      <img className={styles.userPageInner} alt="" src="/undefined15.png" />
      <div className={styles.ellipseDiv} />
      <div className={styles.name}>
        <span>Name</span>
        <span className={styles.span}>{` `}</span>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.editProfile}>Edit Profile</div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.mySchedule}>My Schedule</div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default UserPage;
