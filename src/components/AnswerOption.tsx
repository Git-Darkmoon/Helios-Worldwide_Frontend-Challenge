function AnswerOption({
  answerOption,
  answerText,
  selectedAnswer,
  setSelectedAnswer,
  answerLabels,
}: {
  answerOption: string
  answerText: string
  selectedAnswer: string
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>
  answerLabels: { [key: string]: string }
}) {
  return (
    <button
      type="button"
      onClick={() => setSelectedAnswer(answerOption)}
      className={`w-full rounded-sm border hover:scale-105 ${
        selectedAnswer === answerOption
          ? "border-primary bg-primary text-white dark:border-lightBg dark:bg-lightBg dark:text-darkBg"
          : "border-primary bg-transparent text-primary dark:border-lightBg dark:text-myWhite hover:bg-primary-50"
      } p-4 transition-all duration-200`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full ${
            selectedAnswer === answerOption
              ? "bg-white text-primary dark:text-darkBg"
              : "bg-transparent border border-current"
          }`}
        >
          {selectedAnswer === answerOption
            ? "✓"
            : answerLabels[answerOption as keyof typeof answerLabels]}
        </div>
        <span className="text-left text-lg">{answerText}</span>
      </div>
    </button>
  )
}
export default AnswerOption
