import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {

    state = {
        videos: []
    };

    onFormSubmit = (term) => {
        youtube.get('/search', {
            q: term
        }).then(response => {
            this.setState({ videos: response.data.items });
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

export default App;