import { FaFigma, FaTerminal } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { RiFileGifFill } from "react-icons/ri"
import {
  SiAsus,
  SiAudacity,
  SiCanva,
  SiJetbrains,
  SiKde,
  SiObsstudio,
  SiPexels,
  SiUnsplash,
  SiVisualstudiocode
} from "react-icons/si"

const Uses = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen my-5 mt-20"
      id="tools"
    >
      <div className="container p-3 mx-auto text-center">
        <h3 className="md:text-6xl text-4xl">
          These are the <span className="font-bold">tools</span> 🔨 I{" "}
          <span className="font-bold">use</span> to build stuff...
        </h3>
        <div className="lg:grid-cols-4 lg:w-full grid w-4/5 grid-cols-1 gap-5 mx-auto mt-10">
          {/* Stock & Design */}
          <div className="bg-tuna-100 bg-opacity-10 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center justify-start p-2 space-y-2 transition duration-300 ease-in-out transform rounded shadow-xl">
            <h4 className="md:text-3xl text-2xl font-semibold underline uppercase">
              Stock & Design
            </h4>
            <a
              href="https://fonts.google.com/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <FcGoogle className="mr-1.5" /> Fonts
            </a>
            <a
              href="https://figma.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <FaFigma className="mr-1.5" />
              Figma
            </a>
            <a
              href="https://unsplash.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiUnsplash className="mr-1.5" />
              UnSplash
            </a>
            <a
              href="https://pexels.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiPexels className="mr-1.5 text-[#02A081]" />
              Pexels
            </a>
            <a
              href="https://tenor.com/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <RiFileGifFill className="mr-1.5" />
              Tenor
            </a>
          </div>

          {/* Development */}
          <div className="bg-tuna-100 bg-opacity-10 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center justify-start p-2 space-y-2 transition duration-300 ease-in-out transform rounded shadow-xl">
            <h4 className="md:text-3xl text-2xl font-semibold underline uppercase">
              Development
            </h4>
            <a
              href="https://code.visualstudio.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiVisualstudiocode className="mr-1.5 text-[#20A0F1]" />
              VSCode
            </a>
            <a
              href="https://www.jetbrains.com/datagrip/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiJetbrains className="mr-1.5" />
              DataGrip
            </a>
            <a
              href="https://canva.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <FaTerminal className="mr-1.5" />
              Terminal
            </a>
          </div>

          {/* YouTube & Software */}
          <div className="bg-tuna-100 bg-opacity-10 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center justify-start p-2 space-y-2 transition duration-300 ease-in-out transform rounded shadow-xl">
            <h4 className="md:text-3xl text-2xl font-semibold underline uppercase">
              YouTube & Software
            </h4>
            <a
              href="https://obsproject.com/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiObsstudio className="mr-1.5" />
              OBS Studio
            </a>
            <a
              href="https://kdenlive.org/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiKde className="mr-1.5 text-[#20A0F1]" />
              KDEnLive
            </a>
            <a
              href="https://www.audacityteam.org/"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white group flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiAudacity className="mr-1.5 text-[#0015EB] group-hover:text-[#F9B115]" />
              Audacity
            </a>
            <a
              href="https://canva.com"
              target="_blank"
              className="hover:bg-tuna-900 hover:text-white flex items-center p-1 text-lg font-semibold rounded"
            >
              <SiCanva className="mr-1.5 w-8 h-auto text-[#00C4CC]" />
              Canva
            </a>
          </div>

          {/* Setup */}
          <div className="bg-tuna-100 bg-opacity-10 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-center justify-start p-2 space-y-2 transition duration-300 ease-in-out transform rounded shadow-xl">
            <h4 className="md:text-3xl text-2xl font-semibold underline uppercase">
              Setup
            </h4>
            <div className="hover:bg-tuna-900 hover:text-white group flex items-center p-1 text-lg font-semibold rounded">
              <SiAsus className="mr-1.5 w-auto h-14 text-[#15138C] group-hover:text-white" />
              TUF-Gaming FX-504
            </div>
            <div className="hover:bg-tuna-900 hover:text-white group flex items-center p-1 text-lg font-semibold rounded">
              <SiKde className="mr-1.5 text-[#20A0F1]" />
              Kubuntu 20.10 OS
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Uses
