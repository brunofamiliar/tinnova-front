import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";
import { Avatar } from "@/components/avatar/avatar";

describe("Avatar Component", () => {
  it("deve renderizar corretamente", () => {
    const label = "John Doe";
    const { getByTestId } = render(<Avatar label={label} />);

    const avatarElement = getByTestId("avatar-element");
    expect(avatarElement).toBeInTheDocument();
  });

  it("deve renderizar uma letra maiúscula", () => {
    const label = "jane smith";
    const { getByTestId } = render(<Avatar label={label} />);

    const avatarElement = getByTestId("avatar-element");
    expect(avatarElement).toBeInTheDocument();
  });

  it('deve renderizar "X" para label vazio', () => {
    const { getByText } = render(<Avatar label="" />);

    const avatarElement = getByText("X");
    expect(avatarElement).toBeInTheDocument();
  });
});
