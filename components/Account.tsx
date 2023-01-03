import Image from "next/image"
import Link from "next/link"

const Account: React.FC<{ name: string }> = (props) => {

    const accountHandler = () => {
        console.log("clicked")
    }

    return (
        <Link href="/"><div className="bg-zinc-500 flex flex-col w-32 h-32 justify-center items-center hover:bg-zinc-400 cursor-pointer"
        onClick={accountHandler}>
            <Image src="/anon.svg" height={75} width={75} alt={props.name} />
            <p className="text-zinc-900 font-bold text-2xl">{props.name}</p>
        </div></Link>
    )
}

export default Account