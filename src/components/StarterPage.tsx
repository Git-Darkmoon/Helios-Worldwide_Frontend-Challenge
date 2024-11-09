import { useGlobalContext } from "../context"
import ArrowRight from "../icons/ArrowRight"

function StarterPage() {
  const { startQuiz } = useGlobalContext()

  return (
    <div className="relative bgStarterPagePicture min-h-screen bg-primary">
      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-end justify-center px-48">
        <h1 className="text-[280px] font-bebasNeue text-myWhite">QUIZZLER</h1>
        <div className="mb-12 flex items-center gap-2">
          <span className="text-sm text-myWhite/80 flex gap-x-3">
            By: <img src="/images/ForgePurpleLogo.png" alt="forge logo" />
          </span>
        </div>
        <button
          onClick={startQuiz}
          className="group flex items-center gap-2 text-[32px] text-myWhite/90 transition-colors hover:text-myWhite"
        >
          Let&apos;s start the quiz
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}
export default StarterPage
