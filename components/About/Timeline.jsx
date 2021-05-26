const Timeline = () => {
  return (
    <div className="bg-tuna-100 bg-opacity-10 min-h-screen">
      <div className="p-2 pt-10">
        <h3 className="md:text-6xl text-4xl text-center">
          My <span className="font-semibold">Timeline</span>
        </h3>
        <div className="container w-full h-full mx-auto">
          <div className="wrap relative h-full p-10 overflow-hidden">
            {/* center-line */}
            <div className="border-opacity-20 border-tuna-800 left-1/2 sm:block absolute hidden h-full border"></div>

            {/* 4 */}
            <div className="hover:-translate-y-1 flex flex-row-reverse items-center justify-between w-full mb-8 transition duration-300 ease-in-out transform">
              <div className="order-1 w-5/12"></div>
              <div className="bg-tuna-700 sm:flex items-center order-1 hidden w-10 h-10 rounded-full shadow-2xl">
                <h1 className="mx-auto text-xl font-semibold text-white">4</h1>
              </div>
              <div className="bg-tuna-900 sm:w-5/12 hover:shadow-2xl order-1 w-3/4 px-6 py-4 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-white">
                  First Internship
                </h3>
                <h4 className="mb-3 text-sm font-semibold text-white">
                  April 2021
                </h4>
                <p className="text-lg leading-snug tracking-wide text-white text-opacity-100">
                  Started as an intern full-stack developer (ReactJS + NodeJS)
                  for{" "}
                  <a
                    href="https://www.cea3.com/"
                    className="hover:underline font-bold"
                  >
                    Clean Energy Associates (CEA)
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="hover:-translate-y-1 flex items-center justify-between w-full mb-8 transition duration-300 ease-in-out transform">
              <div className="order-1 w-5/12"></div>
              <div className="bg-tuna-700 sm:flex items-center order-1 hidden w-10 h-10 rounded-full shadow-2xl">
                <h1 className="mx-auto text-xl font-semibold text-white">3</h1>
              </div>
              <div className="sm:w-5/12 hover:shadow-2xl order-1 w-3/4 px-6 py-4 bg-white rounded-lg shadow-xl">
                <h3 className="text-tuna-900 text-xl font-bold">
                  Freelancing 101
                </h3>
                <h4 className="text-tuna-900 mb-3 text-sm font-semibold">
                  2021
                </h4>
                <p className="text-lg leading-snug tracking-wide">
                  Started to build a business website for{" "}
                  <a
                    href="http://devaiss-site.surge.sh"
                    className="hover:underline font-bold"
                  >
                    DevAI Solutions
                  </a>
                  , using ReactJS, & TailwindCSS. Check it out in the projects
                  page!
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="hover:-translate-y-1 flex flex-row-reverse items-center justify-between w-full mb-8 transition duration-300 ease-in-out transform">
              <div className="order-1 w-5/12"></div>
              <div className="bg-tuna-700 sm:flex items-center order-1 hidden w-10 h-10 rounded-full shadow-2xl">
                <h1 className="mx-auto text-xl font-semibold text-white">2</h1>
              </div>
              <div className="bg-tuna-900 sm:w-5/12 hover:shadow-2xl order-1 w-3/4 px-6 py-4 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-white">
                  Started YouTube Channel
                </h3>
                <h4 className="mb-3 text-sm font-semibold text-white">
                  March 2020
                </h4>
                <p className="text-lg leading-snug tracking-wide text-white text-opacity-100">
                  My break-through, started{" "}
                  <a
                    href="https://youtube.com/c/TheSkinnyCoder"
                    className="hover:underline font-bold"
                  >
                    TheSkinnyCoder
                  </a>
                  , my YouTube channel. I post porgramming tutorials & coding
                  series.
                </p>
              </div>
            </div>

            {/* 1 */}
            <div className="hover:-translate-y-1 flex items-center justify-between w-full mb-8 transition duration-300 ease-in-out transform">
              <div className="order-1 w-5/12"></div>
              <div className="bg-tuna-700 sm:flex items-center order-1 hidden w-10 h-10 rounded-full shadow-2xl">
                <h1 className="mx-auto text-xl font-semibold text-white">1</h1>
              </div>
              <div className="sm:w-5/12 hover:shadow-2xl order-1 w-3/4 px-6 py-4 bg-white rounded-lg shadow-xl">
                <h3 className="text-tuna-900 text-xl font-bold">GVPCE(A)</h3>
                <h4 className="text-tuna-900 mb-3 text-sm font-semibold">
                  2018-22, Started College
                </h4>
                <p className="text-lg leading-snug tracking-wide">
                  Currently a senior, pursuing CS. Started to build an in-campus
                  social-media site.
                </p>
              </div>
            </div>

            {/* 0 */}
            <div className="hover:-translate-y-1 flex flex-row-reverse items-center justify-between w-full mb-8 transition duration-300 ease-in-out transform">
              <div className="order-1 w-5/12"></div>
              <div className="bg-tuna-700 sm:flex items-center order-1 hidden w-10 h-10 rounded-full shadow-2xl">
                <h1 className="mx-auto text-xl font-semibold text-white">0</h1>
              </div>
              <div className="bg-tuna-900 sm:w-5/12 hover:shadow-2xl order-1 w-3/4 px-6 py-4 rounded-lg shadow-xl">
                <h3 className="text-xl font-bold text-white">
                  Started Web Development
                </h3>
                <h4 className="mb-3 text-sm font-semibold text-white">
                  2014-16, High School
                </h4>
                <p className="text-lg leading-snug tracking-wide text-white">
                  Learnt HTML5, CSS3, Vanilla JS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
