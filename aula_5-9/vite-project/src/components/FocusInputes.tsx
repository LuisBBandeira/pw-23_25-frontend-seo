import { useRef } from "react";

const FocusInput = () => {
    const inputRef = useRef(null);
    return(
        <div>
            <input  ref={inputRef} type="text" />
            <button onClick={() => inputRef.current?.focus()}>Focar</button>
        </div>
    )
}

export default FocusInput