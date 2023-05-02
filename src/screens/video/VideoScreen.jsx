import React from "react";
import Divider from "../../components/common/Divider";
import VideoPlayer from "../../containers/VideoPlayer";
import styles from './videoscreen.scss'

const VideoScreen = () => {
    return (
        <div style={{width:"100%", border: "0px solid red"}} className="d-flex justify-content-center">
            <div className="d-flex justify-content-center videoscreen-div">
                <div style={{width: "100%"}}>
                    <VideoPlayer/>
                </div>
            </div>
        </div>
    );
}

export default VideoScreen;