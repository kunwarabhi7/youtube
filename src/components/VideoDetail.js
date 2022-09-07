import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Enter Something and press Enter.... </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title={video.snippet.title} src={videoSrc} allowFullScreen='allowFullScreen' autoplay controls />
            </div>
            <div className="ui segment">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>

        </div>
    )
}

export default VideoDetail;