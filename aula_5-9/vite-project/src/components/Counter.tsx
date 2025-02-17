import { useState , useEffect } from "react"

export function Counter() {
    const [counter , setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1)
    };

    useEffect(() => {
       
        const interval = setInterval(()=>{
            setCounter(counter + 1)
        },1000)
        
        return () => clearInterval(interval)
      }, [counter]);

    return( <div>
        <>
        <div>Counter: {counter}</div>
        <button onClick={increment}>Incrementar</button>
        </>
        </div>
    )
            
}
