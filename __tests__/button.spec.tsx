import "@testing-library/jest-dom";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/buttons/button";

describe("Button Component", () => {
  it("deve renderizar corretamente", () => {
    const { getByText } = render(<Button>Meu Botão</Button>);

    const buttonElement = getByText("Meu Botão");
    expect(buttonElement).toBeInTheDocument();
  });

  it("deve chamar a função onClick quando clicado", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Clique em mim</Button>
    );

    const buttonElement = getByText("Clique em mim");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  it('deve estar desabilitado quando a prop "disabled" for verdadeira', () => {
    const { getByText } = render(<Button disabled>Botão Desabilitado</Button>);

    const buttonElement = getByText("Botão Desabilitado");
    expect(buttonElement).toBeDisabled();
  });

  it("deve renderizar o conteúdo inicial", () => {
    const { getByTestId } = render(
      <Button startContent="Início">Meu Botão</Button>
    );

    const buttonElement = getByTestId("button-element");
    const startContentElement = getByTestId("start-content-button");

    expect(buttonElement).toBeInTheDocument();
    expect(startContentElement).toBeInTheDocument();
  });
});
