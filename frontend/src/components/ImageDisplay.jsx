

import { useContext, useState } from "react"
import { AppContext } from "../App";
import { Download } from "lucide-react"

const ImageDisplay = () => {
  const { imageUrl, prompt, handleDownload, setLoading , setError} = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
      <div className="text-center space-y-4">
        {/* Image container with hover effects */}
        <div
          className="relative inline-block group "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={imageUrl || "/placeholder.svg"}
            onLoad={() => {setLoading(false); console.log('loaded successfully')}}
            onError={() => {setLoading(false);setError("Image failed to load")}}
            alt={prompt}
            className="max-w-full h-auto rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ maxHeight: "512px" }}
          />

          {/* Overlay with download button */}
          <div
            className={`absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={handleDownload}
              className="cursor-pointer bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50 flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>

          {/* Neon glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
        </div>

        {/* Prompt display */}
        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/50">
          <p className="text-gray-300 text-sm italic">{prompt}</p>
        </div>

      </div>
    </div>
  )
}

export default ImageDisplay
