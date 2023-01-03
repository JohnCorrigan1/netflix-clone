const AccountModal: React.FC = () => {

    const closeHandler = () => {
        console.log("clicked")
    }

return (
    <>
    <div onClick={closeHandler} className='modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-[2000]' ></div>
      <div className='bg-zinc-900 text-zinc-200 flex flex-col items-center rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-3xl overflow-y-scroll scrollbar-hide h-5/6 z-[2001]'>
        <div className="hover:bg-zinc-400 rounded-full bg-opacity-50 active:scale-95 absolute top-3 right-3"
        onClick={closeHandler}
        >
        </div>
    </div>
  </> )
}

export default AccountModal