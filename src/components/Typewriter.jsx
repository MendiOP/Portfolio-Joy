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

      if (!isDeleting) {
        setCurrentText(currentString.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);

        if (currentIndex === currentString.length) {
          setTypingSpeed(1000); // pause at the end before deleting
          setIsDeleting(true);
        } else {
          setTypingSpeed(150); // normal typing speed
        }
      } else {
        setCurrentText(currentString.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);

        if (currentIndex === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(250); // reset to typing speed
        } else {
          setTypingSpeed(50); // faster delete speed
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
