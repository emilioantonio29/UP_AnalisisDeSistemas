import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { fabric } from 'fabric';

function VideoPlayer() {
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const captureRef = useRef(null);

  const handleCaptureClick = async (e) => {
    const captureDiv = videoRef.current;
    const canvas = await html2canvas(captureDiv);
    const imgData = canvas.toDataURL('image/png');

    const fabricCanvas = new fabric.StaticCanvas(captureRef.current);
    const fabricImg = new fabric.Image();
    fabricImg.setSrc(imgData, () => {
      fabricCanvas.setWidth(fabricImg.width);
      fabricCanvas.setHeight(fabricImg.height);
      fabricCanvas.setBackgroundImage(fabricImg);
    });

    const circle = new fabric.Circle({
      radius: 10,
      fill: 'red',
      left: e.clientX - captureDiv.offsetLeft,
      top: e.clientY - captureDiv.offsetTop,
    });
    fabricCanvas.add(circle);

    setImage(fabricCanvas.toDataURL());
  };

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <div ref={videoRef} style={{ width: '640px', height: '360px' }}>
        <video src="video.mp4" />
        <div onClick={handleCaptureClick} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      </div>
      <div ref={captureRef} style={{ marginTop: '20px' }}>
        {image && <img src={image} alt="captured" />}
      </div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default VideoPlayer;
