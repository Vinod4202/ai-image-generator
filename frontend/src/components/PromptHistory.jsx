import { History, RotateCcw } from "lucide-react"
import { useContext } from "react"
import { AppContext } from "../App";

const PromptHistory = () => {
  const { history, onSelect} = useContext(AppContext);
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-2xl">
      <div className="flex items-center space-x-2 mb-4">
        <History className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Recent Generations</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {history.map((item, index) => (
          <div key={item.prompt + index} onClick={()=>onSelect(item)} className="group cursor-pointer relative">
            {/* Thumbnail container */}
            <div className="relative overflow-hidden rounded-lg border-2 border-purple-500/30 group-hover:border-cyan-400/60 transition-all duration-300">
              <img
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.prompt}
                className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
            </div>

            {/* Prompt preview */}
            <p className="text-xs text-gray-400 mt-2 truncate group-hover:text-gray-300 transition-colors duration-300">
              {item.prompt}
            </p>

            {/* Index indicator */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {index + 1}
            </div>
          </div>
        ))}
      </div>

      {history.length === 0 && (
        <div className="text-center py-8 text-gray-400">
          <History className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No generation history yet</p>
          <p className="text-sm">Generated images will appear here</p>
        </div>
      )}
    </div>
  )
}

export default PromptHistory
