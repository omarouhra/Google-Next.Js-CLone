import Head from "next/head";
import { ViewGridIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Next.js Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* Header */}
      <header className='flex items-center justify-end text-xs space-x-4  px-5 py-3'>
        <a className='link' href='#'>
          Gmail
        </a>
        <a className='link' href='#'>
          Images
        </a>
        <div className=' relativ h-10 w-10 hover:bg-gray-200 rounded-full p-2'>
          <ViewGridIcon className=' text-gray-500' />
        </div>
        <button className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-550 hover:shadow-md'>
          Sign in
        </button>
      </header>

      {/* Body */}
      <main>

      </main>

      {/* Footer */}
    </div>
  );
}
