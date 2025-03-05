"use client";

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { increment } from "../redux/CounterSlice";

const NavBar = () =>{
    return (
    <div>
        <nav>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <Contador />
            <IncrementBtn />
        </nav>
    </div>
    )
}

const Contador = () => {
    const count = useSelector((state:RootState) => state.counter.value);

    return <h1>{count}</h1>
}

const IncrementBtn = () => {
    const dispatch = useDispatch();

    return <button onClick={() => dispatch(increment())}>Increment</button>;
}

export default NavBar