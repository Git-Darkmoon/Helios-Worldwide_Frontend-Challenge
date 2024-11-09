import { render, screen } from "@testing-library/react"
import ResultsPage from "../components/ResultsPage"
import Providers from "../providers"

describe("ResultsPage Component", () => {
  it("displays the final score", () => {
    render(
      <Providers>
        <ResultsPage />
      </Providers>
    )
    expect(screen.getByText(/BRAVO/i)).toBeInTheDocument()
  })
})
