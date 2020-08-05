import { useRef, useEffect, useState } from 'react'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const useVanta = () => {
    const myRefDiv = useRef(null)
    const [ vanta, setVanta ] = useState(0)

    // En la primera renderización "myRefDiv.current" es igual 
    // a "nulo", el valor inicial
    console.log("myRefDiv.current", myRefDiv.current)

    // La función de useEffect se va "invocar" ante 
    // la segunda renderización, en ese punto ya va a 
    // contener un valor "myRefDiv.current"
    useEffect(() => {
        console.log("myRefDiv.current (en use effect)", myRefDiv.current)

        // Sólo pasa una vez por dentro del if
        // vanta === 0, es igual a "vanta == false" 
        // ... aún más corto, es igual a "!vanta"
        if (!vanta) {
            // SOLO PASA UNA VEZ 
            // Acá vamos a hacer la inicialización de "vanta"
            // Activo el efecto "clouds"
            setVanta(Clouds({
                THREE,
                el: myRefDiv.current
            }))// vanta != 0, es diferente de falso
        }
        //Al salir de la ventana debemos detener el efecto y des asociar todos los recursos (div + vanta)
        return () => {
            // Dentro de esta función se va a relizar la tarea
            // de destruir los recursos tomados por "vanta"
            if (vanta) {
                vanta.destroy()
                console.log("Limpiado de recursos")
            }
        }
    }, [vanta]) // Con esto me aseguro que siga funcionando bien
    // si tuviera más variables "use"

    return myRefDiv
}

export default useVanta