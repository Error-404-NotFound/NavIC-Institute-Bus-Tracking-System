import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./sign-up-page.module.css";
const SignUpPage = () => {
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

  const onSignInTextClick = useCallback(() => {
    navigate("/loginpage");
  }, [navigate]);

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupPageChild} />
      <div className={styles.signupPageItem} />
      <img className={styles.image1Icon} alt="" src="/undefined4.png" />
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
        <div className={styles.signUp1}>Sign Up</div>
        <div className={styles.mainMenuChild} />
        <div className={styles.welcomeToBusContainer}>
          <p className={styles.enterYourCredentials}>
            Welcome to Bus Tracking !
          </p>
          <p
            className={styles.enterYourCredentials}
          >{`Enter your credentials `}</p>
        </div>
      </div>
      <div className={styles.signupPageInner} />
      <div className={styles.rectangleDiv} />
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
      <img className={styles.signupPageChild1} alt="" src="/undefined5.png" />
      <img className={styles.signupPageChild2} alt="" src="/undefined6.png" />
      <div className={styles.password}>Password</div>
      <div className={styles.forgotYourPassword1}>Forgot your password?</div>
      <div className={styles.existingUser}>Existing User?</div>
      <div className={styles.signIn} onClick={onSignInTextClick}>
        Sign -in
      </div>
    </div>
  );
};

export default SignUpPage;
