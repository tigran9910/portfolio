import React from "react"
import "../styles/video.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      width="600"
      height="300"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
