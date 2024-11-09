import { render, screen, fireEvent } from "@testing-library/react"
import Providers from "../providers"
import Questionary from "../components/Questionary"

describe("Questionary Component", () => {
  it("renders question and answers", () => {
    render(
      <Providers>
        <Questionary />
      </Providers>
    )
    expect(screen.getByText(/QUESTION/i)).toBeInTheDocument()
    expect(screen.getByText(/Next/i)).toBeInTheDocument()
  })

  it("proceeds to the next question on Next click", () => {
    const questionIndex = 0
    render(
      <Providers>
        <Questionary />
      </Providers>
    )

    const nextButton = screen.getByText(/Next/i)
    fireEvent.click(nextButton)

    expect(
      screen.getByText(`QUESTION ${questionIndex + 1}/10`)
    ).toBeInTheDocument()
  })
})
