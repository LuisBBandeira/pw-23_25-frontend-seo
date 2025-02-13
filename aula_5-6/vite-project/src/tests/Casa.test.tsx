import Casa from "../components/Casa";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

test("Component render" , () => {
    render(<Casa lados={5} />)
    expect(screen.getByText("A casa tem 5 lados")).toBeInTheDocument()
});