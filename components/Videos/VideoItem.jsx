import { formatDistance } from "date-fns"

const VideoItem = ({ video }) => {
  return (
    <div className="group hover:-translate-y-1 hover:shadow-2xl bg-tuna-100 bg-opacity-10 w-10/12 h-auto mx-auto transition duration-300 ease-in-out transform rounded shadow-xl">
      <article className="flex flex-col">
        <div className="pb-72 relative h-0 overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.snippet.title}
          />
        </div>
        <div className="flex flex-col p-4">
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
          >
            <h1 className="line-clamp-2 hover:underline text-3xl font-semibold capitalize">
              {video.snippet.title}
            </h1>
          </a>
          <p className="text-tuna-600 my-2 text-sm font-semibold">
            Published{" "}
            {formatDistance(new Date(video.snippet.publishedAt), new Date(), {
              addSuffix: true,
              includeSeconds: true
            })}
          </p>
          <p className="text-tuna-700 line-clamp-3 flex-grow mt-2">
            {video.snippet.description}
          </p>
        </div>
      </article>
    </div>
  )
}

export default VideoItem
