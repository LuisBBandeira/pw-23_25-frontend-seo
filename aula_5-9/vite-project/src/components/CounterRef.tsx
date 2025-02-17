import { useState, useEffect, useRef  } from "react";

const CounterRef = () => {
    const[counter, setCounter] = useState(0)
    const previousCounter = useRef(0)


    useEffect(() => {
        previousCounter.current = counter;
    },[counter])

    return(
        <div>
            <p>Atual {counter}</p>
            <p>Atual {previousCounter.current}</p>
            <button onClick={() => setCounter(counter +1)}> increment</button>
        </div>
    )
}

export default CounterRef