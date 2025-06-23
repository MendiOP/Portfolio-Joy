// src/components/Typewriter.js
import { useEffect, useState } from "react";

const Typewriter = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;

    const handleType = () => {
      const currentString = text[loopNum % text.length];

      // Set the full string
      if (!isDeleting) {
        setCurrentText(currentString.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        // If string is complete
        if (currentIndex === currentString.length) {
          // Pause at end
          setTypingSpeed(1000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentString.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);

        // If string is deleted
        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, text, typingSpeed]);

  return (
    <h3 className="text-2xl font-bold text-primary mb-6 min-h-[2.5rem]">
      {currentText}
      <span className="ml-1 inline-block w-1 h-8 bg-primary animate-pulse"></span>
    </h3>
  );
};

export default Typewriter;
