import React, { useState, useRef, useEffect } from 'react';

import chatbotIcon from './images/Thulani Mtshwelo.jpeg';
import chatbotImage from './images/Chatbot.png';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatLogRef = useRef(null);

  const answers = {
    "who are you": "I am a chatbot created to answer questions about Thulani Mtshwelo.",
    "who is thulani": "Thulani Mtshwelo is a passionate self-taught software developer with a love for AI and chatbot development.",
    "where are you from": "Thulani is from South Africa in the Western Cape province Cape Town , bringing a unique perspective to technology and innovation.",
    "what can you tell me about him": "Thulani is a dedicated coder who thrives on creativity, perseverance, and delivering user-centric solutions.",
    "what is your personality": "Thulani is curious, determined, and always eager to learn and collaborate on exciting projects.",
    "what do you do": "I answer questions about Thulani Mtshwelo's skills, experience, and projects.",
    "what skills do you have": "Thulani has skills in JavaScript, React, Python, AI, and chatbot development.",
    "tell me about your projects": "Thulani has built several projects including AI-powered chatbots and web applications.",
    "how can i contact you": "You can contact Thulani via the contact form on the portfolio website.",
    "what is thulani good at": "Thulani is skilled in JavaScript, React, Python, AI, and chatbot development, with a passion for creating innovative software solutions.",
    "why did thulani choose to be a developer": "Thulani chose to be a developer driven by a passion for technology, creativity, and the desire to solve real-world problems through code.",
    "what makes you love coding": "Thulani loves coding because it allows him to bring ideas to life, continuously learn new things, and create impactful solutions.",
    "default": "Sorry, I don't understand that question. Please ask something else about Thulani."
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setIsTyping(true);
    const question = input.toLowerCase();

    // Keyword-based flexible matching
    let answer = answers[question];
    if (!answer) {
      if (question.includes('portfolio') || question.includes('projects') || question.includes('work')) {
        answer = "I have built several projects including AI-powered chatbots and web applications. You can explore them in the Projects section of my portfolio.";
      } else if (question.includes('skills') || question.includes('technologies') || question.includes('good at')) {
        answer = "I have skills in JavaScript, React, Python, AI, and chatbot development.";
      } else if (question.includes('contact') || question.includes('reach')) {
        answer = "You can contact me via the contact form on the portfolio website.";
      } else if (question.includes('personality') || question.includes('about you')) {
        answer = "I am curious, determined, and always eager to learn and collaborate on exciting projects.";
      } else if (question.includes('why') && question.includes('developer')) {
        answer = "Thulani chose to be a developer driven by a passion for technology, creativity, and the desire to solve real-world problems through code.";
      } else if (question.includes('love') && question.includes('coding')) {
        answer = "Thulani loves coding because it allows him to bring ideas to life, continuously learn new things, and create impactful solutions.";
      } else {
        answer = answers["default"];
      }
    }

    setChatLog([...chatLog, { question: input, answer }]);
    setInput('');
    // Keep isTyping true briefly to simulate typing indicator, then false
    setTimeout(() => {
      setIsTyping(false);
      if (inputRef.current) {
        inputRef.current.focus();
        // Removed scrollIntoView here as per user request
      }
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const toggleChatbot = () => {
    if (isOpen) {
      setChatLog([]);
    }
    setIsOpen(!isOpen);
  };

  const inputRef = React.useRef(null);

  useEffect(() => {
    // Removed auto scroll on chatLog and isTyping changes as per user request
  }, [chatLog, isTyping]);

  return (
    <div id="chatbot" className={`chatbot-wrapper ${isOpen ? 'open' : 'closed'}`}>
      <button className="chatbot-toggle" onClick={toggleChatbot} aria-label={isOpen ? 'Close Chatbot' : 'Open Chatbot'}>
        { !isOpen && (
          <img
            src={chatbotIcon}
            alt="Chatbot Icon"
            className="chatbot-toggle-icon"
          />
        )}
      </button>
      {isOpen ? (
        <section className="chatbot-section">
          <div className="chatbot-container">
            <button className="chatbot-close-button" onClick={toggleChatbot} aria-label="Close Chatbot">×</button>
            <div className="chatbot-image-container">
              <img
                src={chatbotImage}
                alt="Chatbot Face"
                className="chatbot-image"
              />
              <div className="chatbot-welcome-text">
                <p>Hello! I am Tibule, your friendly chatbot. How can I assist you today?</p>
              </div>
            </div>
            <div className="chat-log" ref={chatLogRef}>
              {chatLog.map((entry, index) => (
                <div key={index} className="chat-entry">
                  <p className="user-message"><strong>You:</strong> {entry.question}</p>
                  <p className="bot-message"><strong>Bot:</strong> {entry.answer}</p>
                </div>
              ))}
              {isTyping && <p className="typing-indicator">Tibule is typing...</p>}
            </div>
            <div className="chat-input-container">
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me about Thulani..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="chat-input"
              />
              <button onClick={handleSend} className="send-button">Send</button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default Chatbot;
