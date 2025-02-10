import { SignInButton, useClerk } from "@clerk/clerk-react";
import backgroundImage from '@/assets/signin/bg.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const SignIn = () => {
  const { user } = useClerk(); // Check if the user is signed in
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      // Redirect to home page if the user is signed in
      navigate('/home/0');
    }
  }, [user, navigate]);

  return (
    <div
    className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed h-screen"
    style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Nav */}
      <div className="w-full container mx-auto">
        <div className="w-full flex items-center justify-between pt-2 m">
          <a
            className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl pl-5 lg:text-4xl"
            href="#"
          >
            Emo
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Tract
            </span>
          </a>
        </div>
      </div>

      {/* Main */}
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-[90%] w-full justify-center">
        {/* Left Col */}
        <div className="flex flex-col w-full xl:w-full justify-center items-center overflow-y-hidden h-full">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
            Advanced
            <span className="bg-clip-text text-transparent bg-gradient-to-r pl-2 from-green-400 via-pink-500 to-purple-500">
              NLP - Framework
            </span>
          </h1>
          <p className="leading-normal text-base md:text-xl mb-8 text-center">
          Emotract is a cutting-edge chat application that combines seamless communication with advanced AI features.
          </p>
          <span className="bg-white hover:bg-white text-black w-20 cursor-pointer text-center p-2 rounded-lg">
            <SignInButton mode="modal" forceRedirectUrl="/home/0" />
          </span>
        </div>
      </div>

        {/* Footer */}
        <div className="w-full text-sm text-center fade-in text-white">
          <span className="text-center">&copy; Emotract 2024 All rights reserved</span>
        </div>

  </div>
  );
};

export default SignIn;
