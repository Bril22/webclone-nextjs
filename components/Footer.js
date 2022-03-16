import Image from "next/image"
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
  return (
    <footer>
        <div className="flex justify-center items-center bg-[#032541]">
            <a className="h-auto w-23" href="">
                <Image className='cursor-pointer' width={175} height={180}  src="/img/tmdb-logo-footer.de1a664e.svg" href="http://localhost:3000/" onClick={() => router.push("/")}  />
            </a>
            <div className="text-white pl-10 text-center">
                <h2>The Movie Database Clone</h2>
                <p>Developed by: Brilian Natanael Zega</p>
                <a href="https://github.com/Bril22">My Github</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
