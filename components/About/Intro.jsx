import Image from "next/image";
import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Intro = () => {
  return (
    <div
      className="bg-tuna-100 bg-opacity-10 flex items-center justify-center min-h-screen"
      id="about"
    >
      <section className="md:py-20 container py-10 mx-auto text-center">
        <h1 className="md:text-7xl sm:text-6xl mb-5 -mt-20 text-5xl">
          About <span className="font-bold">Me</span>
        </h1>
        <div className="container flex max-w-5xl mx-auto">
          <section className="lg:m-0 lg:text-left flex flex-col justify-center w-3/5 m-auto mt-10 space-y-4 font-normal text-center">
            <h1 className="md:text-5xl sm:text-4xl text-3xl">
              Hello, There! This is{" "}
              <span className="font-bold">Rahul SriRam</span>.
            </h1>
            <p className="md:text-3xl text-xl">
              I'm a Fullstack Web Developer who's addicted to Bournvita & my
              laptop. I live by the motto{" "}
              <span className="font-semibold">
                teach right if it isn't being taught right
              </span>
              , so I’m excited to share the things I learn with you!
            </p>
            <div className="lg:justify-start flex items-center justify-center space-x-5">
              <a
                href="https://youtube.com/c/TheSkinnyCoder"
                target="_blank"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <FaYoutube className="w-16 h-16 text-[#FF0000]" />
              </a>
              <a
                href="https://twitter.com/theskinnycoder"
                target="_blank"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <FaTwitter className="text-[#49a1eb] w-14 h-14" />
              </a>
              <a
                href="https://www.instagram.com/_theskinnycoder_/"
                target="_blank"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <FaInstagram className="w-14 h-14 text-[#9D09A6]" />
              </a>
              <a
                href="https://github.com/theskinnycoder"
                target="_blank"
                className="hover:-translate-y-1 transition duration-300 ease-in-out transform"
              >
                <FaGithub className="w-14 h-14" />
              </a>
            </div>
          </section>
          <div className="lg:block hidden p-20 -mt-10">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/64031854?v=4"
              alt="Me"
              width="300"
              height="300"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
