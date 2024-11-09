import { useQuery } from "react-query"
import { getQuestions } from "../services/getQuestions"

export const useGetQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: getQuestions,
  })
}
