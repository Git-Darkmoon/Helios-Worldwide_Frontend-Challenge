import { render, screen, fireEvent } from "@testing-library/react"
import AppProvider from "../context"
import App from "../App"

describe("App Component", () => {
  it("renders StarterPage initially", () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    )
    expect(screen.getByText(/Start Quiz/i)).toBeInTheDocument()
  })

  it("renders Questionary after starting the quiz", () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    )
    fireEvent.click(screen.getByText(/Start Quiz/i))
    expect(screen.getByText(/QUESTION/i)).toBeInTheDocument()
  })
})
