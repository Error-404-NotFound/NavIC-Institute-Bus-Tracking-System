import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./live-tracking.module.css";
const LiveTracking = () => {
  const navigate = useNavigate();

  const onMainTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onEllipseIconClick = useCallback(() => {
    navigate("/user-page");
  }, [navigate]);

  const onBus1TextClick = useCallback(() => {
    navigate("/live-trackinglanding");
  }, [navigate]);

  return (
    <div className={styles.liveTracking}>
      <div className={styles.liveTrackingChild} />
      <img className={styles.mdibusIcon1} alt="" src="/undefined7.png" />
      <div className={styles.liveTrackingItem} />
      <div className={styles.liveTrackingChild} data-scroll-to="rectangle" />
      <img className={styles.image1Icon} alt="" src="/undefined8.png" />
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
      <div className={styles.map}>
        <div className={styles.mapChild} />
        <img className={styles.image4Icon} alt="" src="/undefined10.png" />
      </div>
      <div className={styles.menuDrop}>
        <div className={styles.mdibus1} />
        <div className={styles.menuDropChild} />
        <b className={styles.selectBuses}>Select Buses</b>
        <img className={styles.menuDropItem} alt="" src="/undefined11.png" />
      </div>
      <div className={styles.rectangleDiv} />
      <i className={styles.buses}>Buses</i>
      <div className={styles.busesParent}>
        <div className={styles.buses1}>
          <div className={styles.bus1} onClick={onBus1TextClick}>
            Bus-1
          </div>
          <img className={styles.busesChild} alt="" src="/undefined12.png" />
          <img className={styles.vectorIcon6} alt="" src="/undefined13.png" />
        </div>
        <div className={styles.buses2}>
          <div className={styles.bus2}>Bus-2</div>
          <img className={styles.busesChild} alt="" src="/undefined12.png" />
          <img className={styles.vectorIcon6} alt="" src="/undefined13.png" />
        </div>
        <div className={styles.buses3}>
          <div className={styles.bus3}>Bus-3</div>
          <img className={styles.busesChild} alt="" src="/undefined12.png" />
          <img className={styles.vectorIcon6} alt="" src="/undefined13.png" />
        </div>
        <div className={styles.buses4}>
          <div className={styles.bus4}>Bus-4</div>
          <img className={styles.busesChild} alt="" src="/undefined12.png" />
          <img className={styles.vectorIcon6} alt="" src="/undefined13.png" />
        </div>
      </div>
      <img
        className={styles.liveTrackingChild1}
        alt=""
        src="/undefined14.png"
      />
      <div className={styles.tempos}>
        <i className={styles.tempos1}>Tempos</i>
        <div className={styles.busesGroup}>
          <div className={styles.buses5}>
            <div className={styles.bus2}>Tempo-1</div>
            <img className={styles.busesChild1} alt="" src="/undefined12.png" />
            <img
              className={styles.vectorIcon10}
              alt=""
              src="/undefined13.png"
            />
          </div>
          <div className={styles.buses6}>
            <div className={styles.bus2}>Tempo-2</div>
            <img className={styles.busesChild} alt="" src="/undefined12.png" />
            <img className={styles.vectorIcon6} alt="" src="/undefined13.png" />
          </div>
        </div>
        <img className={styles.temposChild} alt="" src="/undefined14.png" />
      </div>
    </div>
  );
};

export default LiveTracking;
