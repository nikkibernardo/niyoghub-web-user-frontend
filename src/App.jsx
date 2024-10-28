import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About'
import FAQs from './pages/FAQs/FAQs'
import SoilProfile from './pages/SoilProfile/SoilProfile';
import DiseaseIdentification from './pages/DiseaseIdentification/DiseaseIdentification'
import ChatSupport from './pages/ChatSupport/ChatSupport'
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings'
import Feedback from './pages/Feedback/Feedback'
// import SignUp from './pages/SignInOut/SignUp';
import SignIn from './pages/SignInOut/SignIn';
import AboutOut from './pages/About/AboutOut';
import FAQsOut from './pages/FAQs/FAQsOut';
import SignUp from './pages/SignInOut/SignUp';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Otp from './pages/Auth/OTP';
import AllNewsPrograms from './pages/Home/ViewAllNewsPrograms';
import CopraPrice from './pages/Home/CopraPrice';
import CoconutIntercropping from './pages/Home/CoconutIntercropping';

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              {/* <PageTitle title="Signin | NiyogHub" /> */}
              <Home/>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <About />
            </>
          }
        /> 
        <Route
          path="/faqs"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <FAQs />
            </>
          }
        /> 
        <Route
          path="/disease-identification"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <DiseaseIdentification/>
            </>
          }
        /> 
        <Route
          path="/soil-profile"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <SoilProfile/>
            </>
          }
        /> 
        <Route
          path="/chat-support"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <ChatSupport/>
            </>
          }
        /> 
        <Route
          path="/profile"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <Profile/>
            </>
          }
        /> 
        <Route
          path="/settings"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <Settings/>
            </>
          }
        /> 
        <Route
          path="/feedback"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <Feedback/>
            </>
          }
        /> 
        <Route
          path="/signin"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <SignIn/>
            </>
          }
        /> 
        <Route
          path="/signup"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <SignUp/>
            </>
          }
        /> 
        <Route
          path="/forgot-password"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <ForgotPassword/>
            </>
          }
        />
        <Route
          path="/reset-password"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <ResetPassword/>
            </>
          }
        />
        <Route
          path="/otp"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <Otp/>
            </>
          }
        />
        <Route
          path="/all-news-programs"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <AllNewsPrograms/>
            </>
          }
        />
        <Route
          path="/copra-price"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <CopraPrice/>
            </>
          }
        />
        <Route
          path="/coconut-intercropping"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <CoconutIntercropping/>
            </>
          }
        />








        {/* Routes for not logged in pages */}
        <Route
          path="/about-out"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <AboutOut/>
            </>
          }
        /> 
        <Route
          path="/faqs-out"
          element={
            <>
              {/* <PageTitle title="Dashboard | NiyogHub" /> */}
              <FAQsOut/>
            </>
          }
        /> 
      </Routes>
    </>
  );
}

export default App;
