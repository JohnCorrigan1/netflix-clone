import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    return (
        <div className="p-10 flex item-center flex-col bg-black  bg-opacity-75 text-zinc-100">
        <form onSubmit={submitHandler} className="border-b border-black pb-5">
          <div className="flex flex-col w-full">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={emailChangeHandler} className="border-2 rounded-md pl-1 pr-1 border-slate-400" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={passwordChangeHandler} className="border-2 rounded-md pl-1 pr-1 border-slate-400" />
            </div>
            <div className=" mt-5 flex justify-center gap-5">
              <button type="submit" className="bg-blue-400 hover:bg-blue-500 active:scale-95 rounded-md pl-3 pr-3 p-2 shadow-md cursor-pointer">Sign in</button>
              <Link href="/signup"><button className=" rounded-md bg-zinc-200 p-2 pl-3 pr-3 shadow-md cursor-pointer active:scale-95 hover:bg-zinc-300">Sign up</button></Link>
            </div>
        </form>

      <div className="mt-5">
      <button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border w-full"
        // onClick={signInWithGoogle}
      >
        <Image src="/google.png" alt="Google sign in" width={30} height={30} />{" "}
        Sign in with Google
      </button>
      </div>
      <div className="mt-5">
      <button
        className="bg-zinc-200 rounded-md p-2 flex gap-8 items-center shadow-sm border"
        // onClick={signInAnonymouslyHandler}
      >
        <Image src="/anon.svg" alt="anon sign in" width={30} height={30} />{" "}
        Sign in anonymously
      </button>
      </div>
      </div>
    )
}

export default Login;