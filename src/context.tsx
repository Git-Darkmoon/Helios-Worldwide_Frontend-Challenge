import React, { createContext, useContext, useState, ReactNode } from "react"
import { useGetQuestions as useGetQuestionsData } from "./utils/hooks"
import { CorrectAnswers, QuizOption } from "./utils/types"

interface AppContextType {
  isQuizStarted: boolean
  startQuiz: () => void
  actualQuestion: QuizOption | undefined
  question: string | undefined
  answers:
    | {
        answer_a: string
        answer_b: string
        answer_c: string
        answer_d: string
        answer_e: string
        answer_f: string
      }
    | undefined
  correctAnswers:
    | {
        answer_a_correct: string
        answer_b_correct: string
        answer_c_correct: string
        answer_d_correct: string
        answer_e_correct: string
        answer_f_correct: string
      }
    | undefined
  selectedAnswer: string
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>
  questionId: number | undefined
  questionIndex: number
  handleNextQuestion: () => void
  score: number
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const useGlobalContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider")
  }
  return context
}

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0) // New state for tracking the score

  const { data } = useGetQuestionsData()

  const actualQuestion = data?.[questionIndex]
  const questionId = actualQuestion?.id
  const question = actualQuestion?.question
  const answers = actualQuestion?.answers
  const correctAnswers = actualQuestion?.correct_answers

  const startQuiz = () => {
    setIsQuizStarted(true)
    setScore(0) // Reset score when starting a new quiz
  }

  type CorrectAnswerKey = keyof CorrectAnswers

  const handleNextQuestion = () => {
    // Assuming `selectedAnswer` is something like "answer_a", "answer_b", etc.
    const correctKey = `${selectedAnswer}_correct` as CorrectAnswerKey

    if (correctAnswers && correctAnswers[correctKey] === "true") {
      setScore((prevScore) => prevScore + 1)
    }

    setQuestionIndex((prevIndex) => prevIndex + 1)
  }

  return (
    <AppContext.Provider
      value={{
        questionId,
        isQuizStarted,
        startQuiz,
        actualQuestion,
        question,
        answers,
        correctAnswers,
        selectedAnswer,
        setSelectedAnswer,
        questionIndex,
        handleNextQuestion,
        score,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
