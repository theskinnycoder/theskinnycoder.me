import VideoItem from "../Videos/VideoItem"

const YouTubeSection = ({ videos }) => {
  return (
    <>
      <div className="min-h-screen">
        <section className="flex flex-col items-center justify-center w-full py-20 mx-auto text-left">
          <div className="container mx-auto">
            <h2 className="md:text-6xl px-1 text-5xl text-center">
              Recently on my <span className="font-bold">YouTube Channel</span>
              ...
            </h2>
            <section className="lg:grid-cols-2 grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-10">
              {videos?.map((video, idx) => (
                <VideoItem key={idx} video={video} />
              ))}
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default YouTubeSection
