import React, { useState, useEffect, useRef } from 'react';
import ModalVideo from '../components/modal-video/ModalVideo';
import html2canvas from 'html2canvas';
import { fabric } from 'fabric';

function VideoPlayer() {
    const [videoURL, setVideoURL] = useState('');
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);
    const divRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);

    function handleVideoChange(event) {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setVideoURL(fileURL);
    }

    function handlePlay() {
        setPlaying(true);
        console.log('Video iniciado');
    }

    function handlePause(event) {
        let video = event.target;
        let segundoActual = video.currentTime;
        console.log("El video se pausó en el segundo " + segundoActual.toFixed());
        console.log("typeof " + typeof(segundoActual));


        setPlaying(false);
        console.log('Video pausado');
        handleCapture(event)
    }

    const handleMainPlayer = () =>{
        playing ? handlePause() : handlePause();
    }

    function handleCapture(e) {
        html2canvas(e.target).then((canvas) => {
            const imgData = canvas.toDataURL();
            setImgUrl(imgData);
            const img = new Image();
            img.onload = () => {
                const canvas = new fabric.Canvas('canvas');
                const fabricImg = new fabric.Image(img);
                canvas.setWidth(img.width);
                canvas.setHeight(img.height);
                canvas.setBackgroundImage(fabricImg);
                canvas.on('mouse:down', (e) => {
                    const circle = new fabric.Circle({
                        radius: 10,
                        fill: 'red',
                        left: e.pointer.x,
                        top: e.pointer.y,
                        originX: 'center',
                        originY: 'center',
                    });
                    canvas.add(circle);
                    canvas.renderAll();
                });
            };
            img.src = imgData;
        });

        setModalOpen(true);
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
            <ModalVideo imgUrl={imgUrl} setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        </div>
    );
}

export default VideoPlayer;
