import Link from "next/link"
import app from "@/app/_assets/app.png"
const Header = () => {
  return (
    <header className="w-screen fixed top-0 text-red-500 flex items-center justify-center p-2 bg-[#000000] border-b border-[#000000] z-[1] opacity-[85%] mb-20">
        <nav className="w-full flex items-center justify-center p-2 max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-center">
                <div className="w-full flex items-center justify-between ">
                    <div className="flex items-center justify-center
                    bg-white rounded-xl ml-4 ">
                      <Link href="/" className="flex items-center justify-center"><img className=" object-cover overflow-hidden px-[10px] p-[5px] h-[60px]" src="https://cuceed.org/assets/ceed_black.png "></img></Link>
                    </div>
                    <div className="hidden sm:flex mx-auto  items-center justify-center flex-row gap-9 uppercase text-md  font-semibold">
                      <Link href="/#work"><p className="hover:underline hover:text-white">Home</p></Link>
                      <Link href="/#work"><p className="hover:underline hover:text-white">Services</p></Link>
                      <Link href="/#work"><p className="hover:underline hover:text-white">Events</p></Link>
                      <Link href="/#work"><p className="hover:underline hover:text-white">Collaborations</p></Link>
                      <Link href="/#work"><p className="hover:underline hover:text-white">CEED Angels</p></Link>
                      <Link href="/#work"><p className="hover:underline hover:text-white">Annual Report</p></Link>
                      <Link href="/#services"><p className="hover:underline hover:text-white">Startups</p></Link>
                      <Link href="/#skills"><p className="hover:underline hover:text-white">About Us</p></Link>
                      <Link href="/#contact"><p className="hover:underline hover:text-white">Contact Us</p></Link>
                    </div>
                    <div className="sm:hidden flex items-center justify-center">
                      <img src={app.src} alt="app" className="object-cover h-4 w-4 invert"/>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}
export default Header