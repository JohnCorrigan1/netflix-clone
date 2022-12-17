import Link from "next/link"
import Image from "next/image"
import { auth } from "../lib/firebase"
import { useState, useEffect } from "react"

const NavBar: React.FC = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div className={`flex z-50 justify-between items-center pt-2 pl-5 pr-5 pb-2 fixed w-full ${scrolled ? 'bg-gray-900 bg-opacity-80' : 'bg-transparent'}`}>
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