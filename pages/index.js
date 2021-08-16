import Head from "next/head";
import { useRef } from "react";
import {
  ViewGridIcon,
  SearchIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Head>
        <title>Google Next.js Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex items-center justify-end  space-x-4  px-5 py-3'>
        <a className='link' href='#'>
          Gmail
        </a>
        <a className='link' href='#'>
          Images
        </a>
        <button className=' relativ h-10 w-10 hover:bg-gray-200 rounded-full p-2'>
          <ViewGridIcon className=' text-gray-500' />
        </button>
        <button className='px-4 py-2 text-sm md:px-6 bg-blue-600 text-white rounded hover:bg-blue-550 hover:shadow-md'>
          Sign in
        </button>
      </header>

      {/* Body */}
      <main>
        <form className='flex flex-col justify-center items-center  px-2 flex-grow '>
          <Image
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            height={100}
            width={300}
          />
          <div className='flex  w-full space-x-2 hover:shadow-lg mt-5 focus-within:shadow-lg  max-w-md  rounded-full border px-5 py-3 items-center  sm:max-w-xl lg:max-w-2xl'>
            <button>
              <SearchIcon className='h-4 text-gray-500 ' />
            </button>
            <input
              ref={searchInputRef}
              type='text'
              className='outline-none flex-grow'
            />
            <button>
              <MicrophoneIcon className='h-5 text-blue-600' />
            </button>
          </div>
          <div className='mt-8 flex  space-x-2'>
            <button onClick={search} className='button'>
              Google Search
            </button>
            <button onClick={search} className='button'>
              I'm Feeling Lucky
            </button>
          </div>

          <div>
            <p className='text-xs mt-4'>
              Google offred in:
              <span className='languageLink'>Français</span>
              <span className='languageLink'>العربية</span>
            </p>
          </div>
          <button hidden type='submit'>
            Search
          </button>
        </form>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
