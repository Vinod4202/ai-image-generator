import { useContext } from "react"
import { AppContext } from "../App";


import PromptInput from "./PromptInput"
import ImageDisplay from "./ImageDisplay"
import PromptHistory from "./PromptHistory"
import LoadingSpinner from "./LoadingSpinner"

const ImageGenerator = () => {

  const { imageUrl, loading, error, history } = useContext(AppContext);
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
        <PromptInput />
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-900/50 border border-red-500/50 rounded-xl p-4 text-red-200 text-center">
          <p className="font-medium">Generation Failed</p>
          <p className="text-sm opacity-80">{error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      )}

      {/* Generated Image Display */}
      {imageUrl && error==null && <ImageDisplay/>}
      {/* Prompt History */}
      {history.length > 0 && <PromptHistory/>}
    </div>
  )
}

export default ImageGenerator
