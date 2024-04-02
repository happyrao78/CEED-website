import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
const Footer = () => {
  return (
    <footer className="w-screen text-white flex items-center justify-center p-2 bg-[#171717] border-t border-[#2e2e2e]">
      <div className="flex items-center justify-between gap-2 text-white p-4 w-full">
        <Link href="https://linkedin.com/in/yakshit-garg" className="text-sm">
          <FaLinkedinIn className="w-5 h-5"/>
        </Link>
        <p className="text-xs s:text-sm">© 2023-2024 Copyright. All rights reserved</p>
        <Link href="https://github.com/YAKSHIT-22" className="text-sm">
          <TbBrandGithubFilled className="w-5 h-5"/>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
