import Image from 'next/image'

const NewAccount: React.FC = () => {
    return (
        <div className="bg-zinc-500 flex flex-col w-32 h-32 justify-center items-center hover:bg-zinc-400 cursor-pointer">
            <Image src="/add.svg" height={75} width={75} alt="anon" />
            <p className="text-zinc-900 font-bold text-2xl">Add Account</p>
        </div>

    )
}

export default NewAccount