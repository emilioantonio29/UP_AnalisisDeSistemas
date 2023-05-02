import React, { useState, useEffect, useRef } from 'react';
import ModalVideo from '../components/modal-video/ModalVideo';
import html2canvas from 'html2canvas';
import { fabric } from 'fabric';
import { redDot } from '../utils/redDot';
import Divider from '../components/common/Divider';

function VideoPlayer() {
    const [videoURL, setVideoURL] = useState('');
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [objectFit, setObjectFit] = useState(false);
    const divRef = useRef(null);
    const videoRef = useRef(null);


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

        setPlaying(false);
        console.log('Video iniciado');
        // let video = event.target;
        // let segundoActual = video.currentTime;
        // console.log("El video se pausó en el segundo " + segundoActual.toFixed());
        // console.log("typeof " + typeof(segundoActual));
        // setPlaying(false);
        // console.log('Video pausado');
        // handleCapture(event)
    }

    const convertBase64 = (img) =>{
        let base64 = html2canvas(img).then((canvas) => {
            const imgData = canvas.toDataURL();
            return imgData
        });

        return base64;
    }

    const addCircleToImage = (base64Image, circleBase64, x, y) => {
        const img = new Image();
        img.src = base64Image;
        img.onload = () => {
            const canvas = document.getElementById('my-canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const circleImg = new Image();
            circleImg.src = circleBase64;
            circleImg.onload = () => {
                const radius = 20;
                const centerX = x;
                const centerY = y;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'orange';
                ctx.fill();
                const editedImageBase64 = canvas.toDataURL();
                console.log("editedImageBase64", editedImageBase64)
                setImgUrl(editedImageBase64)
                setModalOpen(true)
                // Aquí puedes usar la variable editedImageBase64 con la imagen editada
            };
        };
    };
      

    const handleMainPlayer = async (e) =>{
        setPlaying(!playing)
        if(playing){
            const divBounds = e.target.getBoundingClientRect();
            const x = e.clientX - divBounds.left;
            const y = e.clientY - divBounds.top;
            console.log(`El usuario hizo clic en (${x}, ${y}) dentro del div superpuesto`);
            const currentTime = videoRef.current.currentTime;
            console.log(currentTime.toFixed())
            console.log("videoRef", videoRef.current)
            let base64img = await convertBase64(videoRef.current);
            let redDotImg = redDot;
            addCircleToImage(base64img, redDotImg, x, y)
        }

        playing ? videoRef.current.pause() : videoRef.current.play();

    }

    function handleCapture(e) {
        html2canvas(e.target).then((canvas) => {
            const imgData = canvas.toDataURL();
            setImgUrl(imgData);
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
            {/* <button onClick={()=>{console.log(objectFit)}}>test</button> */}
            <canvas id="my-canvas" style={{ display: 'none' }}></canvas>
            {/* <canvas id="my-canvas" ></canvas> */}
            <Divider/>
                <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                    <button type="button" className="btn btn-primary btn-sm" style={{width: "15%"}}>Comentarios</button>
                    <h5 style={{textAlign: "center", width: "70%"}}>Video Scanner</h5>
                    <div style={{width: "15%", display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
                        <div className="form-check form-switch">
                            <input onClick={()=>{setObjectFit(!objectFit)}} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                            <label class="form-check-label" for="flexSwitchCheckDefault">Object Fit: Cover</label>
                        </div>
                    </div>
                </div>
            <Divider/>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <div 
                ref={divRef} 
                style={{width: "100%", minHeight: "720px", border: "1px solid black", backgroundColor: "black", position: "relative"}}
            >
                <div onClick={handleMainPlayer} style={{height: "670px", width: "100%", border: "0px solid green", position: "absolute", zIndex: 1000}}></div>
                <video 
                    style={objectFit ? {objectFit: "cover"} : null}
                    src={videoURL} 
                    ref={videoRef}
                    width={width} 
                    height="720" 
                    controls
                    onPlay={handlePlay} 
                    onPause={handlePause}>
                </video>
            </div>
            <ModalVideo imgUrl={imgUrl} setModalOpen={setModalOpen} modalOpen={modalOpen}/>
        </div>
    );
}

export default VideoPlayer;
