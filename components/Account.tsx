import Image from "next/image"
import Link from "next/link"
import { useContext } from "react";
import { UserContext } from "../lib/AuthContext";

const Account: React.FC<{ name: string }> = (props) => {

    
    const accountHandler = () => {
`   `
       console.log(props.name)
    }   

    return (
        <Link href="/"><div className="bg-zinc-500 flex flex-col w-32 h-32 justify-center items-center hover:bg-zinc-400 hover:scale-105 active:scale-95 cursor-pointer rounded-lg"
        onClick={accountHandler}>
            <Image src="/anon.svg" height={75} width={75} alt={props.name} />
            <p className="text-zinc-900 font-bold text-2xl">{props.name}</p>
        </div></Link>
    )
}

export default Account