import Image from 'next/image';
import { useRouter } from "next/router";
import {
    PlusIcon,
    BellIcon,
    TranslateIcon,
    UserIcon,
    SearchIcon,
  } from "@heroicons/react/solid";

function Header() {
    const router = useRouter();
  return (
    <header className="sticky bg-[#032541] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
        <Image href='http://localhost:3000/' src='/img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' width={175} height={80} alt='' className='cursor-pointer' onClick={() => router.push("/")} />
        <div className='hidden ml-10 md:flex items-center space-x-6 font-bold'>
            <a className='transform motion-safe:hover:scale-110 active:text-[#06b6d4]' href='#'>
                Movies
            </a>
            <a className='transform motion-safe:hover:scale-110 active:text-[#06b6d4]' href='#'>
                TV Shows
            </a>
            <a className='transform motion-safe:hover:scale-110 active:text-[#06b6d4]' href='#'>
                People
            </a>
            <a className='transition duration-100 transform hover:scale-125 active:text-[#06b6d4] cursor-pointer' href='#'>
                More
            </a>
        </div>
        <div className='hidden ml-auto md:flex items-center space-x-9'>
            <a href='#'>
                <PlusIcon className="h-7 transform motion-safe:hover:scale-110" />
            </a>
            <a href='#'>
                <TranslateIcon className="h-7 transform motion-safe:hover:scale-110" />    
            </a>
            <a href='#'>
                <BellIcon className="h-7 transform motion-safe:hover:scale-110" /> 
            </a>
            <a href='#'>
                <SearchIcon className="h-7 transform motion-safe:hover:scale-110" />   
            </a>
            <button>
            <a>
                <UserIcon className="h-7 transform motion-safe:hover:scale-110 hover:bg-[#06b6d4]" />
            </a>
            </button>
        </div>
    </header>
  )
}

export default Header;