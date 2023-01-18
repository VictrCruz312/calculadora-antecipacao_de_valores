import { render, fireEvent, screen } from "@testing-library/react";
import Form from "./";
import App from "../../App";

describe("Form component", () => {
  let setResponse: any;
  setResponse = jest.fn();

  test("should show error message when submit form with empty fields", async () => {
    render(<Form setResponse={setResponse} />);

    const submitButton = screen.getByText("calcular");
    fireEvent.click(submitButton);

    const error1 = await screen.findByText("valor é requerido");
    expect(error1).toBeInTheDocument();

    const error2 = await screen.findByText("parcela deve ser um número*");
    expect(error2).toBeInTheDocument();

    const error3 = await screen.findByText(
      "Porcentagem deve ser neste formato: 0.0*"
    );
    expect(error3).toBeInTheDocument();
  });

  test("should show error message when submit form with invalid values", async () => {
    render(<App />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], {
      target: { value: "999" },
    });
    fireEvent.change(inputs[1], {
      target: { value: 13 },
    });
    fireEvent.change(inputs[2], {
      target: { value: 101 },
    });
    const submitButton = screen.getByText("calcular");

    fireEvent.click(submitButton);

    const error1 = await screen.findByText("maximo 12*");
    expect(error1).toBeInTheDocument();

    const error2 = await screen.findByText("maximo 100*");
    expect(error2).toBeInTheDocument();
  });
});
