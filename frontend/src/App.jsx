import ImageGenerator from "./components/ImageGenerator"
import { useState, useEffect, createContext } from "react";
import "./App.css"

export const AppContext = createContext();

function App() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const raw = localStorage.getItem("ai_img_gen_history");
    if (raw) setHistory(JSON.parse(raw));
  }, []);

  const saveToHistory = (entry) => {
    const next = [entry, ...history.filter((h) => h.imageUrl !== entry.imageUrl)].slice(0, 5);
    setHistory(next);
    localStorage.setItem("ai_img_gen_history", JSON.stringify(next));
  };


  const handleGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return setError("Please enter a prompt.");
    if (error) return;
    setError(null);
    setLoading(true);
    setImageUrl(null);
    try {
      const seed = Math.floor(Math.random() * 1000);
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}}`;
      setImageUrl(url);
      saveToHistory({ prompt, imageUrl: url });
    } catch (err) {
      setError(err.message);
    } 
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ai-image-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  const onSelect = (h) =>{
    setPrompt(h.prompt); 
    setImageUrl(h.imageUrl);
  };
  return (
    <AppContext.Provider value={{ prompt, setPrompt, imageUrl, setImageUrl, handleGenerate, loading, setLoading, error, setError, handleDownload, history, onSelect }}>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <header className="text-center py-8">
          <div className="flex justify-center items-center gap-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Visaura 
            </h1> 
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              AI Image generator
            </span> 
          </div>
          
          <p className="text-gray-300 text-lg">Transform your imagination into stunning visuals</p>
        </header>

        <main className="container mx-auto px-4 pb-8">
          <ImageGenerator />
        </main>
      </div>
    </div>
    </AppContext.Provider>
  )
}

export default App