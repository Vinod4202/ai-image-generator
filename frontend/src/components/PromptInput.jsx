
import { Sparkles, Wand2 } from "lucide-react"
import { useContext } from "react"
import { AppContext } from "../App";

const PromptInput = () => {
  const {prompt, handleGenerate, setPrompt, loading} = useContext(AppContext);
  return (
    <form onSubmit={handleGenerate} className="space-y-4">
      <div className="relative">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
          <Sparkles className="inline w-4 h-4 mr-1" />
          Describe your vision
        </label>

        {/* Input field with neon glow effect */}
        <div className="relative group">
          <textarea
            id='prompt'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic cityscape at sunset with flying cars and neon lights..."
            className="w-full px-4 py-3 bg-gray-900/50 border-2 border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none h-24 group-hover:border-purple-400/50"
          />

          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
        </div>
      </div>

      {/* Generate button */}
      <button
        type="submit"
        // disabled={!prompt.trim() || isLoading}
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/25 disabled:shadow-none flex items-center justify-center space-x-2 cursor-pointer"
      >
        <Wand2 className="w-5 h-5" />
        <span>{loading ? "Generating..." : "Generate Image"}</span>
      </button>
    </form>
  )
}

export default PromptInput
