import type { NextPage } from "next";
import Image from "next/image";
import Login from "../components/Login";

const SignIn: NextPage = () => {
  return (
    <div className="login bg-[url(/bg.jpg)] flex justify-center items-center">
      <div className="bg-black bg-opacity-50 login absolute z-0"></div>
      <div className="absolute -top-5 left-0 lg:top-0 lg:left-5">
        <Image src="/logo.png" height={60} width={200} alt="Netflix" />
      </div>
      <div className="z-50 w-[480px]">
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
