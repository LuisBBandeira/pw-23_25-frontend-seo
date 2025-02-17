import { useState, useCallback } from "react";

const ChildComponent = ({execute}: {execute: () => void }) => {
    return <button onClick={execute}>exacute</button>
};

const ParentComponent = () => {
    const [counter , setCounter]= useState(0)

    const increment = useCallback(() => setCounter((c) => c +1),[]);

    return (
        <div>
            <p>Contador {counter}</p>
            <ChildComponent execute={increment} />
        </div>
    )
}

export default ParentComponent
