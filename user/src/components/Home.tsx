import "./Home.css";
import { SignInButton } from "@clerk/clerk-react";
const Home = () => {
  return (
    <>
      <h1>Sign in with this button</h1>
      <SignInButton  mode="modal" forceRedirectUrl="/dashboard" />
    </>
  );
};

export default Home;
