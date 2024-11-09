import { useGlobalContext } from "../context"
import ArrowRight from "../icons/ArrowRight"

function StarterPage() {
  const { startQuiz } = useGlobalContext()

  return (
    <div className="relative min-h-screen bg-primary">
      {/* Geometric Lines Pattern - Using pseudo-elements for lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-px w-full rotate-45 bg-white/10" />
        <div className="absolute left-1/4 top-0 h-full w-px rotate-45 bg-white/10" />
        <div className="absolute right-1/4 top-0 h-full w-px -rotate-45 bg-white/10" />
        <div className="absolute right-0 bottom-1/4 h-px w-full -rotate-45 bg-white/10" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-end justify-center px-48">
        <h1 className="text-[280px] font-bebasNeue text-myWhite">QUIZZLER</h1>
        <div className="mb-12 flex items-center gap-2">
          <span className="text-sm text-myWhite/80">BY:</span>
          <span className="font-semibold text-myWhite">Forge/</span>
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
