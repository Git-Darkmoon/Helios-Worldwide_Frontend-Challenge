import { useGlobalContext } from "../context"

function ResultsPage() {
  const { score } = useGlobalContext()

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="relative w-3/5 flex flex-col items-center justify-center bg-primary p-12">
        {/* Geometric Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-1/4 h-px w-full rotate-45 bg-white/10" />
          <div className="absolute left-1/4 top-0 h-full w-px rotate-45 bg-white/10" />
          <div className="absolute right-1/4 top-0 h-full w-px -rotate-45 bg-white/10" />
          <div className="absolute right-0 bottom-1/4 h-px w-full -rotate-45 bg-white/10" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-end">
          <h1 className="xl:text-[300px] text-9xl font-bebasNeue leading-[0.6] text-myWhite">
            BRAVO!
          </h1>
          <h2 className="xl:text-[125px] text-6xl font-bebasNeue tracking-wide text-myWhite">
            YOU HAVE SCORED
          </h2>
          <button
            onClick={refreshPage}
            className="mt-8 inline-block xl:text-3xl text-myWhite underline decoration-2 underline-offset-4 transition-colors hover:text-myWhite/90"
          >
            Wanna Play Again?
          </button>
        </div>
      </div>

      {/* Middle Section (text-white) */}
      <div className="flex items-center justify-center bg-mytext-myWhite p-12">
        <div className="xl:text-[400px] text-8xl tracking-tighter font-bebasNeue text-primary">
          {score}/{10}
        </div>
      </div>
    </div>
  )
}
export default ResultsPage
