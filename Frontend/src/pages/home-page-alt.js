import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home-page-alt.module.css";
const HomePageAlt = () => {
  const navigate = useNavigate();

  const onHomePageAltContainerClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onMainTextClick = useCallback(() => {
    navigate("/live-tracking");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className={styles.homepageAlt} onClick={onHomePageAltContainerClick}>
      <div className={styles.homepageAltChild} />
      <div className={styles.homepageAltItem} />
      <img className={styles.image1Icon} alt="" src="/undefined.png" />
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
        <div className={styles.logIn}>
          <div className={styles.signIn} onClick={onSignInTextClick}>
            Sign in
          </div>
          <div
            className={styles.signUpWrapper}
            onClick={onFrameContainer1Click}
          >
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/undefined1.png" />
      </div>
      <div className={styles.mainText1}>
        <div className={styles.text1}>
          <b className={styles.navic}>{`NavIC `}</b>
          <b className={styles.basedBusTracking1}>based bus tracking</b>
        </div>
        <div className={styles.theIndianRegional1}>
          The Indian Regional Navigation Satellite System (IRNSS), with an
          operational name of NavIC (acronym for Navigation with Indian
          Constellation, is an autonomous regional satellite navigation system
          that provides accurate real-time positioning and timing services.
        </div>
        <div className={styles.cta}>
          <b className={styles.moreAboutNavic}>More About NavIC</b>
        </div>
        <img className={styles.mdiarrowIcon1} alt="" src="/undefined2.png" />
        <div className={styles.clickHere}>Click Here</div>
      </div>
      <img className={styles.image2Icon} alt="" src="/undefined3.png" />
    </div>
  );
};

export default HomePageAlt;
