import { Greeting } from "../components/Greeting2";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

test("Component render" , () => {
    render(<Greeting name="juliao "/>)
    expect(screen.getByText("Hello juliao")).toBeInTheDocument()
});