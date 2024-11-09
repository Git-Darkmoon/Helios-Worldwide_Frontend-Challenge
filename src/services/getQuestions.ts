import { customFetch } from "../utils/axios"
import { QuizOption } from "../utils/types"

export const getQuestions = async (): Promise<QuizOption[]> => {
  const res = await customFetch.get("/")
  return res.data
}
