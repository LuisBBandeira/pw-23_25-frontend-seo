import { render, screen, fireEvent } from "@testing-library/react";
import Contador from "../components/Contador";
import "@testing-library/jest-dom"

test("Incrementa o contador ao clicar no botão" , () => {
    render(<Contador/>);

    const botao = screen.getByText("Incrementar");
    fireEvent.click(botao)

    expect(screen.getByText("Valor: 1")).toBeInTheDocument();
})