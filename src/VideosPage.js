import React, { Component } from "react";
import "./App.css";
import play from './icons/play'
import speaker from './icons/speaker'
import pause from './icons/pause'
import mute from './icons/mute'
import ReactPlayer from 'react-player'

class VideosPage extends Component {
    constructor(props) {
        super(props);
        this.state = { playVideos: false, 
                       muted: false, 
                       playedOnce: false,
                       videoEnlarged1: false, 
                       videoEnlarged2: false,
                       videoEnlarged3: false,
                       videoEnlarged4: false,
                       videoEnlarged5: false, 
                       videoEnlarged6: false,
                       videoEnlarged7: false,
                       videoEnlarged8: false,
                       videoEnlarged9: false, 
                       videoEnlarged10: false,
                       videoEnlarged11: false,
                       videoEnlarged12: false };
    
        this.startPlaying = this.startPlaying.bind(this);
        this.stopPlaying = this.stopPlaying.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.increaseVideo = this.increaseVideo.bind(this);
      }
    
      startPlaying() {
        this.setState(() => ({
            playVideos: true,
            playedOnce: true,
        }));
      }

      stopPlaying() {
        this.setState(() => ({
            playVideos: false,
        }));
      }

      changeVolume() {
        this.setState(prevState => ({
            muted: !prevState.muted,
        }));
      }

      increaseVideo = temp => videoNumber => {
          const literal = `videoEnlarged${temp}`;
          const newState = !this.state[literal];
        this.setState({
            [literal]: newState,
        });
      }
    
    render() {
        const { playVideos, muted, videoEnlarged1, playedOnce } = this.state;

        let videoSrc = ["https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/1.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/2.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/3.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/4.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/5.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/6.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/7.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/8.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/9.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/10.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/11.mp4",
            "https://s3.us-east-2.amazonaws.com/michaelt.co/asset+for+final+project/video/export+1_3.mp4"];
        
        let displayVideos = [];
        let numberOfVideo = -1;
        for (let i = 0; i < 12; i++) {
            numberOfVideo++;
            let currentEnlarged = `videoEnlarged${i+1}`;
            if(i === 0) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={videoEnlarged1 ? "firstitemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} width="100%" height="100%" loop={true} volume={muted ? 0 : 0.5} />
                    </div>
                   {videoEnlarged1 && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 1 || i === 4 || i === 5) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "firstitemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} width="100%" height="100%" loop={true} volume={0} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 2 || i === 3 || i === 6 || i === 7) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "seconditemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} width="100%" height="100%" loop={true} volume={0} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else if(i === 8 || i === 9) {
                displayVideos.push(<>
                   <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "thirditemBig" : "firstitemSmall"}>
                        <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} width="100%" height="100%" loop={true} volume={0} />
                    </div>
                   {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                </>);
            }
            else  {
                displayVideos.push(<>
                    <div onClick={this.increaseVideo(i+1)} className="videoPlayer" id={this.state[currentEnlarged] ? "fourthitemBig" : "firstitemSmall"}>
                         <ReactPlayer url={videoSrc[numberOfVideo]} playing={playVideos} width="100%" height="100%" loop={true} volume={0} />
                     </div>
                    {this.state[currentEnlarged] && <div className="videoPlayer"></div>}
                 </>);
            }
          }
        
        return (<div className="videosBackground">
                    <div className="VideosContainer">
                        {displayVideos}
                    </div>
                    <p className="enlargeParagraph">Click to enlarge a video</p>
        {!playVideos && <>{!playedOnce && <p className="rotateDevice">Rotate the device for best experience</p>}<div className="playIcon" onClick={this.startPlaying}>{play.icon}</div></> }
        {playVideos && <><span className="pauseIcon" onClick={this.stopPlaying}>{pause.icon}</span>
                    {muted && <span className="speakerIcon" onClick={this.changeVolume}>{speaker.icon}</span>}
        {!muted && <span className="speakerIcon" onClick={this.changeVolume}>{mute.icon}</span>}</> }
                    
                </div>)
    }
}

export default VideosPage;
