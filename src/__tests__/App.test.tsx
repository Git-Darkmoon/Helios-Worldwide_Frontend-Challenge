import { render, screen, fireEvent } from "@testing-library/react"
import App from "../App"
import Providers from "../providers"

describe("App Component", () => {
  it("renders StarterPage initially", () => {
    render(
      <Providers>
        <App />
      </Providers>
    )
    expect(screen.getByText(/Let's start the quiz/i)).toBeInTheDocument()
  })

  it("renders Questionary after starting the quiz", () => {
    render(
      <Providers>
        <App />
      </Providers>
    )
    fireEvent.click(screen.getByText(/Let's start the quiz/i))
    expect(screen.getByText(/QUESTION/i)).toBeInTheDocument()
  })
})
