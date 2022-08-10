import { SearchIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {

  const router = useRouter();
  const inputRef = useRef(null);
  const search = e => {
    e.preventDefault();
    const term = inputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  }


  return (
    <header className='sticky top-0 bg-white '>
      <div className="flex w-full p-6 items-center">
      <Image 
        src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="google"
        width={120} 
        height={40}
        className="cursor-pointer"
        objectFit='contain'
        onClick={() => router.push("/")}
        />
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-md max-w-3xl items-center'>
            <input ref={inputRef} type="text" className='flex-grow w-full focus:outline-none' defaultValue={router.query.term} />
            <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110' onClick={() => inputRef.current.value = ""}/>
            <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' />
            <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
            <button hidden type='submit' onClick={search}>Search</button>
        </form>
        <Avatar url="/profile.jpeg" className="ml-auto"/>
      </div>
      {/* header options */}
      <HeaderOptions />
    </header>
  )
}

export default Header