import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: []
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

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;