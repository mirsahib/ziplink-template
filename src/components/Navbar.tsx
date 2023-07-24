import React from "react";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <div className="flex w-[20px] h-[20px] bg-indigo-500 text-lg font-bold text-gray-200 p-5 items-center justify-center rounded-full">
            <span className="line-through">0</span>Li
          </div>
          <span className="font-bold ml-3 text-xl">ZipLink</span>
        </Link>
      </div>
    </header>
  );
}
