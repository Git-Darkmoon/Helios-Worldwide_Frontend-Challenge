export type QuizOption = {
  readonly id: number
  readonly question: string
  readonly description: string
  readonly answers: Answers
  readonly multiple_correct_answers: string
  readonly correct_answers: CorrectAnswers
  readonly correct_answer: null
  readonly explanation: string
  readonly tip: null
  readonly tags: Tag[]
  readonly category: "React"
  readonly difficulty: "Medium"
}

export type Answers = {
  readonly answer_a: string
  readonly answer_b: string
  readonly answer_c: string
  readonly answer_d: string
  readonly answer_e: string
  readonly answer_f: string
}

export type CorrectAnswers = {
  readonly answer_a_correct: string
  readonly answer_b_correct: string
  readonly answer_c_correct: string
  readonly answer_d_correct: string
  readonly answer_e_correct: string
  readonly answer_f_correct: string
}

export type Tag = {
  readonly name: "React"
}
