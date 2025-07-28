import { MessageCircleHeart } from "lucide-react";
import { useEffect, useState } from "react";

export const IntroLoading = () => {
  const text = "Social Media";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    
    const typeWriter = () => {      
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 150);
      }
    };

    typeWriter();
  }, []);

  return (
    <div className="fixed inset-0 dark:bg-gray-900 bg-[#F1F4F7] flex flex-col items-center justify-center gap-4 z-50 select-none">
      <MessageCircleHeart className="text-pink-500 w-12 h-12 animate-bounce" />
      <span className="dark:text-b-wt text-white-theme text-4xl font-bold font-lobster tracking-wide animate-pulse">
        {displayText}
      </span>
    </div>
  );
};
