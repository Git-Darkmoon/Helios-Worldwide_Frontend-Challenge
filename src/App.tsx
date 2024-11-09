import { useState } from "react"
import StarterPage from "./components/StarterPage"
import { useGlobalContext } from "./context"

interface QuizOption {
  id: string
  label: string
  text: string
}

const options: QuizOption[] = [
  { id: "A", label: "A", text: "Gauze grievance disorder" },
  { id: "B", label: "B", text: "Retained surgical sponge syndrome" },
  { id: "C", label: "C", text: "Sponge-induced septicemia" },
  { id: "D", label: "D", text: "Fabric foreign object syndrome" },
]

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")

  const { isQuizStarted, setIsQuizStarted } = useGlobalContext()

  const startQuiz = () => {
    setIsQuizStarted(true)
  }

  if (isQuizStarted) {
    return (
      <div className="min-h-screen grid place-items-center bg-gray-100/90 p-6">
        <div className="mx-auto max-w-3xl">
          {/* Question Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-8xl font-bebasNeue font-bold tracking-tight text-primary">
              QUESTION 1/10
            </h1>
            <p className="text-4xl text-primary">
              Which of the following is the term for surgical complications
              resulting from surgical sponges left inside the patient&apos;s
              body?
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedAnswer(option.id)}
                className={`w-full rounded-lg border ${
                  selectedAnswer === option.id
                    ? "border-primary bg-primary text-white"
                    : "border-primary bg-transparent text-primary hover:bg-primary-50"
                } p-4 transition-all duration-200`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      selectedAnswer === option.id
                        ? "bg-white text-primary"
                        : "bg-transparent border border-current"
                    }`}
                  >
                    {option.label}
                  </div>
                  <span className="text-left text-lg">{option.text}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-center">
            <button
              className="bg-primary px-12 py-2 text-lg text-white hover:bg-primary-700"
              disabled={!selectedAnswer}
              onClick={() => console.log(`Selected answer: ${selectedAnswer}`)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <StarterPage startQuiz={startQuiz} />
    </>
  )
}

export default App
