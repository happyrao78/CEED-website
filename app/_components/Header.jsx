import Link from "next/link"
import app from "@/app/_assets/app.png"
const Header = () => {
  return (
    <header className="w-screen fixed top-0 text-white flex items-center justify-center p-2 bg-[#171717] border-b border-[#2e2e2e] z-[1]">
        <nav className="w-full flex items-center justify-center p-2 max-w-screen-2xl mx-auto">
            <div className="w-full flex items-center justify-center">
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center justify-center">
                      <Link href="/" className="flex items-center justify-center"><p className="font-bold font-mattone text-xl">YAKSHIT<sup className="font-light text-sm ml-1">@</sup></p></Link>
                    </div>
                    <div className="hidden sm:flex items-center justify-center flex-row gap-6 uppercase text-xs font-bold">
                      <Link href="/#work"><p>Work</p></Link>
                      <Link href="/#services"><p>Services</p></Link>
                      <Link href="/#skills"><p>Skills</p></Link>
                      <Link href="/#contact"><p>Contact</p></Link>
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