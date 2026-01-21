import { useEffect, useState } from "react";

export const LoadingCreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome To My Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="
        fixed inset-0 z-50 bg-black text-gray-100
        flex flex-col items-center justify-center
        px-4 text-center
      "
    >
      {/* TEXT */}
      <div
        className="
          mb-6 font-mono font-bold
          text-2xl sm:text-3xl md:text-4xl
          leading-snug
        "
      >
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* LOADING BAR */}
      <div className="w-56 sm:w-64 h-0.5 bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
