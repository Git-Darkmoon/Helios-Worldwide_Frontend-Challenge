import { useGlobalContext } from "../context"

function NextButton() {
  const { selectedAnswer, setSelectedAnswer, handleNextQuestion } =
    useGlobalContext()

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="submit"
        className="bg-primary px-12 py-2 rounded-sm text-lg text-white hover:bg-primary-700 cursor-pointer hover:scale-105 transition-transform disabled:bg-primary/50 disabled:cursor-not-allowed"
        disabled={!selectedAnswer}
        onClick={() => {
          handleNextQuestion()
          setSelectedAnswer("")
        }}
      >
        Next
      </button>
    </div>
  )
}
export default NextButton
