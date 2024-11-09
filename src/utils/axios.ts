import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY

export const customFetch = axios.create({
  baseURL: `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=react&difficulty=Medium&limit=10`,
})
