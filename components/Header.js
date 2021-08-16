import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className=' sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center'>
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push("/")}
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border flex-grow border-gray-200 rounded-full shadow-lg max-w-3xl'>
          <input
            type='text'
            ref={searchInputRef}
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer active:scale-110 transition duration-100'
          />

          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
          <SearchIcon
            onClick={search}
            className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer'
          />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
