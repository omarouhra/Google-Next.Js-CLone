import Head from "next/head";
import {
  ViewGridIcon,
  SearchIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
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
        <div className=' relativ h-10 w-10 hover:bg-gray-200 rounded-full p-2'>
          <ViewGridIcon className=' text-gray-500' />
        </div>
        <button className='px-4 py-2 text-sm md:px-6 bg-blue-600 text-white rounded hover:bg-blue-550 hover:shadow-md'>
          Sign in
        </button>
      </header>

      {/* Body */}
      <main className='flex flex-col w-full h-[70vh] items-center justify-center '>
        <div className='relative w-72 h-36 '>
          <Image
            src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='flex space-x-2 justify-between items-center rounded-full border w-[450px] py-[10px] px-4 hover:shadow-md md:w-[650px]'>
          <SearchIcon className='h-4 text-gray-500' />
          <input type='text' className='outline-none flex-grow' />
          <MicrophoneIcon className='h-5 text-blue-600' />
        </div>
        <div className='mt-8 flex space-x-4'>
          <button className='button'>Google Search</button>
          <button className='button'>I'm Feeling Lucky</button>
        </div>

        <div>
          <p className='text-xs mt-7'>
            Google offred in :{" "}
            <span className='link languageLink '>Francais</span>{" "}
            <span className='link languageLink '>العربية</span>
          </p>
        </div>
      </main>

      {/* Footer */}
      
    </div>
  );
}
