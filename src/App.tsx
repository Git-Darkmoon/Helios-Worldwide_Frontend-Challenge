import StarterPage from "./components/StarterPage"
import { useGlobalContext } from "./context"
import Questionary from "./components/Questionary"

function App() {
  const { isQuizStarted } = useGlobalContext()

  if (isQuizStarted) return <Questionary />

  return <StarterPage />
}

export default App
