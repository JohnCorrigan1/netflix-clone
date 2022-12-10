import Link from "next/link"
import Image from "next/image"
import { auth } from "../lib/firebase"

const NavBar: React.FC = () => {

    return(
        <div className="flex justify-between items-center bg-zinc-900 p-5  bg-opacity-0 fixed w-full">
            <div className="flex gap-5 items-center">
                <Image src="/logo.png" height={60} width={100} alt="Netflix" />
                <div className="flex gap-5 items-center">
                    <Link href="/">
                        <p className="text-zinc-100 hover:text-main">Home</p>
                    </Link>
                    <Link href="/movies">
                        <p className="text-zinc-100 hover:text-main">Movies</p>
                    </Link>
                    <Link href="/series">
                        <p className="text-zinc-100 hover:text-main">Series</p>
                    </Link>
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <Link href="/accounts">
                    <p className="text-zinc-100 hover:text-main">Switch Account</p>
                </Link>
                <p onClick={() => auth.signOut()} className="text-zinc-100 hover:text-main  hover:cursor-pointer">Log out</p>
            </div>
        </div>
    )
}

export default NavBar