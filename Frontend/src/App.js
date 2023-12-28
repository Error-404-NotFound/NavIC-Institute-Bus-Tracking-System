import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageAlt from "./pages/home-page-alt";
import SignUpPage from "./pages/sign-up-page";
import LoginPage from "./pages/login-page";
import LiveTracking from "./pages/live-tracking";
import UserPage from "./pages/user-page";
import DashBoard from "./pages/dash-board";
import LiveTrackingLanding from "./pages/live-tracking-landing";
import About from "./pages/about";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup-page":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
      case "/live-tracking":
        title = "";
        metaDescription = "";
        break;
      case "/user-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/live-trackinglanding":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageAlt />} />
      <Route path="/signup-page" element={<SignUpPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/live-tracking" element={<LiveTracking />} />
      <Route path="/user-page" element={<UserPage />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/live-trackinglanding" element={<LiveTrackingLanding />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
export default App;
