import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Video01 = () => {
  const videoUrl =
    "https://www.youtube.com/watch?v=cLRztK1zE6s";

  const [playing, setPlaying] = useState(true);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <ReactPlayer
        url={videoUrl}
        playing={playing}
        width="100%"
      />
    </>
  );
};

export default Video01;
