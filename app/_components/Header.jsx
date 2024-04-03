import Link from "next/link"
import app from "@/app/_assets/app.png"
const Header = () => {
  return (
    <header className="w-screen fixed top-0 text-slate-800 flex items-center justify-center p-2 bg-[#9b9d9b] border-b border-[#dad2d2] z-[1] opacity-[85%] mb-20">
        <nav className="w-full flex items-center justify-center p-2 max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-center">
                <div className="w-full flex items-center justify-between ">
                    <div className="flex items-center justify-center  ">
                      <Link href="/" className="flex items-center justify-center"><img className=" object-cover overflow-hidden px-[10px] p-[5px] h-[60px]" src="https://cuceed.org/assets/ceed_black.png "></img></Link>
                    </div>
                    <div className="hidden sm:flex mx-auto  items-center justify-center flex-row gap-9 uppercase text-md  font-semibold">
                      <Link href="/#work"><p className="hover:underline">Home</p></Link>
                      <Link href="/#work"><p className="hover:underline">Services</p></Link>
                      <Link href="/#work"><p className="hover:underline">Events</p></Link>
                      <Link href="/#work"><p className="hover:underline">Coolaborations</p></Link>
                      <Link href="/#work"><p className="hover:underline">CEED Angels</p></Link>
                      <Link href="/#work"><p className="hover:underline">Annual Report</p></Link>
                      <Link href="/#services"><p className="hover:underline">Startups</p></Link>
                      <Link href="/#skills"><p className="hover:underline">About Us</p></Link>
                      <Link href="/#contact"><p className="hover:underline">Contact Us</p></Link>
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