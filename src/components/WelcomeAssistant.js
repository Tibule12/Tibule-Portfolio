import React, { useEffect, useState } from 'react';

const WelcomeAssistant = () => {
  const [speaking, setSpeaking] = useState(false);

  const messages = [
    "Hello! Welcome to Thulani Mtshwelo's portfolio, where passion meets innovation.",
    "Thulani is a self-taught software developer with a knack for creating AI-powered chatbots and elegant web applications.",
    "Discover the latest enhancements and features added to this portfolio, showcasing continuous growth and innovation.",
    "Check out the new AI Chatbot Tools section to learn about the powerful platforms like Landbot and watsonx used in his projects.",
    "Dive into the About section to discover his journey, skills, and the heart behind the code.",
    "Explore the Projects section to see his creativity and technical prowess in action.",
    "Don't miss the Testimonials to hear what others say about working with Thulani.",
    "If you want to connect, the Contact section is your gateway to reach out.",
    "Sit back, relax, and enjoy this digital tour of Thulani's world. Let's make technology delightful together!"
  ];

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSpeaking(true);
      let index = 0;

      const speakNext = () => {
        if (index < messages.length) {
          const utterance = new SpeechSynthesisUtterance(messages[index]);
          utterance.rate = 1;
          utterance.pitch = 1;
          utterance.onend = () => {
            index++;
            speakNext();
          };
          window.speechSynthesis.speak(utterance);
        } else {
          setSpeaking(false);
        }
      };

      speakNext();

      return () => {
        window.speechSynthesis.cancel();
      };
    }
  }, []);

  return (
    <div className="welcome-assistant" style={{ display: 'none' }}>
      {/* Hidden assistant, just talks */}
    </div>
  );
};

export default WelcomeAssistant;
