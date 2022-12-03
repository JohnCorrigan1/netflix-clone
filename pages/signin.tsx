import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import Link from "next/link";

const SignIn: NextPage = () => {
  return (
    <div className="login bg-[url(/bg.jpg)] flex justify-center items-center">
      <div className="w-1/6">
        <Login />
      </div>
    </div>
  );
};

export default SignIn;
