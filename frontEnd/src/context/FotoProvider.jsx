import React ,{ createContext , useContext, useState} from "react";

// Creamos los contextos que necesitamos usar
const FotoContext = createContext()
const FotoChangeContext = createContext()


// Creamos las funciones para aplicarlos
export const useFotoContext = () => {
    return useContext(FotoContext)
}

export const useFotoChangeContext = () => {
    return useContext(FotoChangeContext);
}

//creamos el componente padre q englobará a todos los q necesiten el contexto
export function FotoProvider ({children}) {
    // State para la foto en el dashboard
    const [fotos, setFotos] = useState(null)

    const changeFoto = (nuevaFoto) => {
        setFotos(nuevaFoto)
    }

  return (
    <FotoContext.Provider value={fotos}>
        <FotoChangeContext.Provider value={changeFoto}>
              {children}
        </FotoChangeContext.Provider>
    </FotoContext.Provider>
  );
}
