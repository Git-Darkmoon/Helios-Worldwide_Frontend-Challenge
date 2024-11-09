import { useGlobalContext } from "../context"

function NextButton() {
  const { selectedAnswer, setSelectedAnswer, handleNextQuestion } =
    useGlobalContext()

  return (
    <div className="mt-8 flex justify-center">
      <button
        type="submit"
        className="bg-primary dark:bg-lightBg dark:text-darkBg px-12 py-2 rounded-sm text-lg text-myWhite hover:bg-primary-700 cursor-pointer hover:scale-105 transition-transform disabled:bg-myWhite/50 disabled:text-lightBg disabled:cursor-not-allowed"
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
