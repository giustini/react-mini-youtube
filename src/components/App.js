import React from "react";

import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

import "./App.css";

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    onFormSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term
            }
        }).then(response => {
            this.setState({ videos: response.data.items });
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onFormSubmit }/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos }/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;