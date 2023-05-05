import { createContext, useState, useEffect } from "react";

// memory space created
export const UserGlobalContextMemorySpace = createContext();

export const UserGlobalContext = ({children}) =>{

    const [listaCategorias, setListaCategorias] = useState("");

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