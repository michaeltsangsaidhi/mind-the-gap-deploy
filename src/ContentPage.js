import React, { Component } from "react";
import "./App.css";
import VideosPage from './VideosPage';

class ContentPage extends Component {
    
    render() {
        return (
          <div className="ContentPage">
            <div className="ContentSection">
              <VideosPage />
            </div>
          </div>
        )
    }
}

export default ContentPage;
