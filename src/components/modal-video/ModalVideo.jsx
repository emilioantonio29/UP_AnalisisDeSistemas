import React, {useState, useContext} from "react";
import Sheet from 'react-modal-sheet';
import Divider from "../common/Divider";
import { UserGlobalContextMemorySpace } from "../../context/userGlobalContext";

const ModalVideo = ({setModalOpen, modalOpen, imgUrl, clickTime, ejeX, ejeY}) => {

    const {listaCategorias} = useContext(UserGlobalContextMemorySpace);
    const [categoria, setCategoria] = useState("");
    const [categoriaIndex, setCategoriaIndex] = useState(null);
    const [subCategoria, setSubCategoria] = useState("");
    const [subCategoriaIndex, setSubCategoriaIndex] = useState(null);
    const [opcion, setOpcion] = useState("");

    const [subCategorias, setSubcategorias] = useState([])
    
    const handleCategoria = (event) =>{
        setCategoria(event.target.value);
    }
    const handleSubCategoria = (event) =>{
        setSubCategoria(event.target.value);
    }
    const handleOpcion = (event) =>{
        setOpcion(event.target.value);
    }

    // console.log("context", listaCategorias)
    // console.log("context", listaCategorias?.categorias)
    // console.log("context", Array.isArray(listaCategorias?.categorias))

    const handleCategoriaIndex = (index) =>{
        setCategoriaIndex(index)
        setSubcategorias(listaCategorias.categorias[index]);
    }   

    return (
        <>
        <Sheet 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)}
            snapPoints={[-50, 0.9, 0]}
            initialSnap={1}
            disableDrag={true}
        >
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <div style={{padding: "2%", paddingBottom: "10%"}}>
                        <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                            <button onClick={() => setModalOpen(false)} type="button" className="btn btn-primary btn-sm" style={{width: "15%"}}>Cancelar</button>
                            <h4 style={{textAlign: "center", width: "70%"}}>Detalle del evento</h4>
                            <div style={{width: "15%"}}></div>
                        </div>
                        <Divider/>
                        <img
                            src={imgUrl}
                            alt="captura de pantalla"
                            style={{ width: '100%', height: 'auto', border: "1px solid black"}}
                        />
                        <Divider/>
                        <div>
                            <h6><span style={{fontWeight:"bold"}}>El usuario hizo click en el segundo:</span> {clickTime}</h6>
                        </div>
                        <div>
                            <h6><span style={{fontWeight:"bold"}}>Click Eje X:</span> {ejeX}</h6>
                        </div>
                        <div>
                            <h6><span style={{fontWeight:"bold"}}>Click Eje Y:</span> {ejeY}</h6>
                        </div>
                        <div className="d-flex  justify-content-between">
                            {/* <select class="form-select" aria-label="Default select example" value={categoria} onChange={handleCategoria}>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select> */}
                            <div style={{width: "100%"}}>
                                <h6>Categorias</h6>
                                <select style={{width: "95%", paddingRight: "0%"}} className="form-select" aria-label="Default select example" value={categoria} onChange={handleCategoria}>
                                    <option className='option-default-size' value=""  hidden>Seleccione una Categoria</option>
                                    {listaCategorias?.categorias && Array.isArray(listaCategorias.categorias) && listaCategorias.categorias.map((data, index) => 
                                        {
                                            return(
                                                <>
                                                    <option  onClick={()=>{handleCategoriaIndex(index)}} key={index} value={Object.getOwnPropertyNames(data)} onChange={handleCategoria}>{Object.getOwnPropertyNames(data)}</option>
                                                    {/* <button onClick={()=>{console.log(data)}}>test {index}</button> */}
                                                </>
                                            )
                                    })}
                                    {/* <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option> */}
                                </select>
                            </div>
                            <div style={{width: "100%"}}>
                                <h6>Subcategorias</h6>
                                <select style={{width: "95%"}} className="form-select" aria-label="Default select example" value={categoria} onChange={handleSubCategoria}>
                                    <option className='option-default-size' value=""  hidden>Seleccione una Subcategoria</option>
                                </select>
                            </div>
                            <div style={{width: "100%"}}>
                                <h6>Opcion</h6>
                                <select style={{width: "95%"}} className="form-select" aria-label="Default select example" value={categoria} onChange={handleOpcion}>
                                </select>
                            </div>
                        </div>
                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
        </>
    );
}

export default ModalVideo;