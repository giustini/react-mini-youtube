import React from "react";

import SearchBar from "./SearchBar";
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
        console.log(video)
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={ this.onFormSubmit }/>
                <VideoList onVideoSelect={ this.onVideoSelect } videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;