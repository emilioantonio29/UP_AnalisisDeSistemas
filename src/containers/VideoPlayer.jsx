import React, { useState, useEffect, useRef } from 'react';

function VideoPlayer() {
    const [videoURL, setVideoURL] = useState('');
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [playing, setPlaying] = useState(false);
    const divRef = useRef(null);

    function handleVideoChange(event) {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setVideoURL(fileURL);
    }

    function handlePlay() {
        setPlaying(true);
        console.log('Video iniciado');
    }

    function handlePause() {
        setPlaying(false);
        console.log('Video pausado');
    }

    const handleMainPlayer = () =>{
        playing ? handlePause() : handlePause();
    }

    useEffect(() => {
        function handleResize() {
            if (divRef.current) {
                setHeight(divRef.current.clientHeight);
                setWidth(divRef.current.clientWidth);
            }
        }
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        setHeight(0);
        setWidth(divRef.current.clientWidth);

        setHeight(divRef.current.clientHeight);
        setWidth(divRef.current.clientWidth);
    }, [divRef]);

    return (
        <div>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <div onClick={handleMainPlayer} ref={divRef} style={{width: "100%", maxHeight: "50%", border: "1px solid black", backgroundColor: "black"}}>
                <video src={videoURL} width={width} height="720" controls
                    onPlay={handlePlay} onPause={handlePause}>
                </video>
            </div>
        </div>
    );
}

export default VideoPlayer;
