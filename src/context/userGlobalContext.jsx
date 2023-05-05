import { createContext, useState, useEffect } from "react";

// memory space created
export const UserGlobalContextMemorySpace = createContext();

export const UserGlobalContext = ({children}) =>{

    const estructuraCategorias = {
        categorias:[
            {infraestructura: [
                {calles: ["autopista","calle comun","montaña"]},
                {edificios: ["grande","pequeño","base militar","casa"]},
                {otros: ["aeropuerto"]}
            ]},
            {vehiculos: [
                {aereo: ["uav","helicoptero","avion de combate","avion de rescate"]},
                {terrestre: ["camioneta","auto","offroad"]},
                {acuatico: ["lancha"]}
            ]},
            {equipo: [
                {cortaDistancia: ["pistola","subfusil"]},
                {largaDistancia: ["fusil","sniper","ametralladora"]},
                {pesado: ["rpg", "c4"]}
            ]}
        ]
    }

    const [listaCategorias, setListaCategorias] = useState(estructuraCategorias);

    useEffect(()=>{
        //Mount: 

        let categorias = localStorage.getItem("categorias");

        if(categorias){
            //logica de persistencia

        }

        return () =>{
        //Unmount
    
        }
      }, [])


    return(
        <UserGlobalContextMemorySpace.Provider 
            value={
                {
                    listaCategorias, setListaCategorias
                }}>
            {children}
        </UserGlobalContextMemorySpace.Provider>
    );
}