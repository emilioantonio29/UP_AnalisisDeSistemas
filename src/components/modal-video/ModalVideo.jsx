import React, {useState} from "react";
import Sheet from 'react-modal-sheet';
import Divider from "../common/Divider";

const ModalVideo = ({setModalOpen, modalOpen, imgUrl}) => {

    return (
        <>
        <Sheet 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)}
            snapPoints={[-50, 0.9, 0]}
            initialSnap={1}
        >
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{padding: "2%"}}>
                        <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                            <button onClick={() => setModalOpen(false)} style={{width: "10%"}}>Cancelar</button>
                            <h4 style={{textAlign: "center", width: "80%"}}>Detalle del evento</h4>
                        </div>
                        <Divider/>
                        <img
                            src={imgUrl}
                            alt="captura de pantalla"
                            style={{ width: '100%', height: 'auto', border: "1px solid red"}}
                        />
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
        </>
    );
}

export default ModalVideo;