import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login-page.module.css";
const LoginPage = () => {
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

  const onSignUpText1Click = useCallback(() => {
    navigate("/signup-page");
  }, [navigate]);

  return (
    <div className={styles.loginpage}>
      <div className={styles.loginpageChild} />
      <div className={styles.loginpageItem} />
      <img className={styles.image3Icon} alt="" src="/undefined4.png" />
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
          <div className={styles.signUpWrapper}>
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
        <div className={styles.mainMenuInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.signIn}>Sign in</div>
        <div className={styles.mainMenuChild} />
        <div className={styles.signInToYour1}>{`Sign-in to your account `}</div>
      </div>
      <div className={styles.loginpageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.loginpageChild1} />
      <div className={styles.username}>Username</div>
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
      <img className={styles.loginpageChild2} alt="" src="/undefined5.png" />
      <img className={styles.loginpageChild3} alt="" src="/undefined6.png" />
      <div className={styles.password}>Password</div>
      <div className={styles.forgotYourPassword1}>Forgot your password?</div>
      <div className={styles.newToPlatform1}>New to Platform?</div>
      <div className={styles.signUp1} onClick={onSignUpText1Click}>
        Sign Up
      </div>
    </div>
  );
};

export default LoginPage;
