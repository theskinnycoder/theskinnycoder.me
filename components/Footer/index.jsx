import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiNextDotJs, SiTailwindcss } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="sticky flex flex-col items-center justify-center w-full px-4 py-10 text-lg text-center shadow-inner">
      <h5>
        Copyright <FaRegCopyright className="inline-block mb-1" />{" "}
        {new Date().getFullYear()},{" "}
        <Link href="/">
          <a className="font-bold">TheSkinnyCoder</a>
        </Link>
        . All Right Reserved
      </h5>
      <h5 className="flex flex-col items-center justify-center">
        <span>This site is built with</span>
        <div className="flex space-x-2">
          <a
            href="https://nextjs.org"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <SiNextDotJs className="w-6 h-6" />
          </a>
          <a
            href="https://tailwindcss.com/"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <SiTailwindcss className="w-6 h-6 text-[#38B2AC]" />
          </a>
          <a
            href="https://vercel.com/"
            className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
          >
            <IoLogoVercel className="w-6 h-6" />
          </a>
        </div>
      </h5>
    </footer>
  );
};

export default Footer;
