import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const NewAccount: React.FC<{
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = (props) => {
  const modalHandler = () => {
    props.setIsOpen(true);
  };

  return (
    <div
      className="bg-zinc-500 flex flex-col w-32 h-32 justify-center items-center hover:bg-zinc-400 cursor-pointer rounded-lg"
      onClick={modalHandler}
    >
      <Image src="/add.svg" height={75} width={75} alt="anon" />
      <p className="text-zinc-900 font-bold text-2xl">Create</p>
    </div>
  );
};

export default NewAccount;
