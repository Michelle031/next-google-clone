import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import {SearchIcon} from "@heroicons/react/outline"
import { ViewGridIcon, MicrophoneIcon} from "@heroicons/react/solid";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";



export default function Home() {
  const searchRef = useRef(null);
  const router = useRouter();
  const search = e => {
    e.preventDefault();
    const term = searchRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" >
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer'/>
          <Avatar url="/profile.jpeg"/>
        </div>
      </header>

      {/* body */}

      <form className='flex flex-col items-center mt-12 md:mt-32 flex-grow w-4/5'>
        <Image 
        src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google"
        width={272} 
        height={92}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input type="text" ref={searchRef} className="focus:outline-none flex-grow" />
          <MicrophoneIcon className='h-5 text-gray-500' />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 md:space-y-0 sm:space-x-4 sm:flex-row">
          <button className="btn" onClick={search}>Google Search</button>
          <button className="btn" onClick={search}>I&apos;m feeling lucking</button>
        </div>
      </form>

      {/* footer */}

      <Footer />

    </div>
  )
}
