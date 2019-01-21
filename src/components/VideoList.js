import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {

        const renderedVideosList = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video}/>;
        });

        return <div className="ui relaxed divided list">{renderedVideosList}</div>;
    }
}

export default VideoList;