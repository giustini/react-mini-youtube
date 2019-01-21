import React from "react";

class VideoItem extends React.Component {
    render() {
        return (
            <div className="item">
                <img className="ui image"
                     alt={ this.props.video.snippet.title }
                     src={ this.props.video.snippet.thumbnails.medium.url }
                />
                <div className="content">
                    <div className="header"> { this.props.video.snippet.title } </div>
                </div>

            </div>
        );
    }
}

export default VideoItem;