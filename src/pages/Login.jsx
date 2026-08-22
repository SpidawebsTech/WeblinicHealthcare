import Navbar from "../components/Navbar/Navbar";
import LoginForm from "../components/Login/LoginForm";
import LoginBanner from "../components/LoginBanner/LoginBanner";
import Footer from "../components/Footer/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <Navbar />

      <div className="login-page">
        <LoginForm />
        <LoginBanner /> 
      </div>
       <Footer/>
    </>
  );
}

export default Login;