import { Loader2, Sparkles } from "lucide-react"


const LoadingSpinner = () => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated spinner */}
        <div className="relative">
          <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-transparent border-t-cyan-400 rounded-full animate-spin animation-delay-150"></div>
        </div>

        {/* Loading text with sparkles */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
            <h3 className="text-lg font-semibold text-white">Generating Image</h3>
            <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse animation-delay-300" />
          </div>
          <p className="text-gray-400 text-sm">AI is crafting your vision...</p>
        </div>

        {/* Progress bar animation */}
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner
