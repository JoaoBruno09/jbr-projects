import {faMugHot, faRocket, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loader = ({onComplete}) => {
  const messages = [
    {icon: faRocket, text: "Preparing awesomeness..."},
    {icon: faMugHot, text: "Take a rest, do a coffee break..."},
    {icon: faCheckCircle, text: "Almost ready... Hang tight!"}
  ];
  const [displayText, setDisplayText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
        setDisplayText(messages[messageIndex].text.substring(0, index));
        index++;
  
        if (index > messages[messageIndex].text.length) {
          clearInterval(interval);
  
          setTimeout(() => {
            if (messageIndex < messages.length - 1) {
              setMessageIndex((prev) => prev + 1);
              setDisplayText("");
            } else if (onComplete) {
              onComplete();
            }
          }, 1000); // Wait before switching messages
        }
      }, 50); // Typing speed

    return () => clearInterval(interval);
  }, [messageIndex, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Spinning Loader */}
      <div className="relative flex items-center justify-center w-16 h-16">
        {/* Spinning Ring */}
        <div className="absolute w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        <FontAwesomeIcon icon={messages[messageIndex].icon} className="text-2xl text-white" />
      </div>

      {/* Typing Effect */}
      <p className="mt-4 text-white font-medium text-lg">{displayText}</p>
    </div>
  );
};
