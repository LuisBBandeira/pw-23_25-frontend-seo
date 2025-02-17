import { useEffect } from "react";

const LifeCicleTest = () => {
    useEffect(() => {
        console.log("Componemt montado")
        return ()=> console.log("Componente desmontado")
    }, [])
    return <div>Hello world</div>
}

export default LifeCicleTest