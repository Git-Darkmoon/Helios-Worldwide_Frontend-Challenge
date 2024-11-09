import { useGlobalContext } from "../context"
import AnswerOption from "./AnswerOption"
import NextButton from "./NextButton"
import ResultsPage from "./ResultsPage"

function Questionary() {
  const {
    questionIndex,
    question,
    answers,
    selectedAnswer,
    setSelectedAnswer,
  } = useGlobalContext()

  const possibleAnswers = answers
    ? Object.entries(answers).filter(([, value]) => value !== null)
    : []

  const answerLabels = {
    answer_a: "A",
    answer_b: "B",
    answer_c: "C",
    answer_d: "D",
    answer_e: "E",
    answer_f: "F",
  }

  if (questionIndex === 9) return <ResultsPage />

  return (
    <div className="min-h-screen bgQuestionaryPicture grid place-items-center bg-lightBg dark:bg-darkBg p-6">
      <img
        src="/images/ForgeQuestionaryLogo.png"
        className="absolute top-6 right-6"
        alt="forge logo"
      />
      <form className="mx-auto max-w-3xl">
        {/* Question Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-8xl font-bebasNeue font-bold tracking-tight text-primary dark:text-myWhite">
            QUESTION {questionIndex + 1}/10
          </h1>
          <p className="text-4xl text-primary dark:text-myWhite">{question}</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {possibleAnswers.map(([answerOption, answerText]) => {
            return (
              <AnswerOption
                key={answerOption}
                answerOption={answerOption}
                answerText={answerText}
                selectedAnswer={selectedAnswer}
                setSelectedAnswer={setSelectedAnswer}
                answerLabels={answerLabels}
              />
            )
          })}
        </div>

        <NextButton />
      </form>
    </div>
  )
}
export default Questionary
