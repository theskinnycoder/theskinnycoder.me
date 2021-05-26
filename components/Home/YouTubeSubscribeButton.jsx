import { useEffect, useRef, useState } from "react";

const YouTubeSubscribeButton = () => {
  const [initialized, setInitialized] = useState(false);
  const youtubeSubscribeNode = useRef(null);

  useEffect(() => {
    if (initialized) return;
    const youtubescript = document.createElement("script");
    youtubescript.src = "https://apis.google.com/js/platform.js";
    youtubeSubscribeNode.current.parentNode.appendChild(youtubescript);
    setInitialized(true);
  }, []);

  return (
    <section className="youtubeSubscribe">
      <div
        ref={youtubeSubscribeNode}
        className="g-ytsubscribe"
        data-theme="default"
        data-layout="full"
        data-count="default"
        data-channel="TheSkinnyCoder"
        data-channelid="UCS-FbZkVQf6WHrZE74d4wOA"
      />
    </section>
  );
};

export default YouTubeSubscribeButton;
