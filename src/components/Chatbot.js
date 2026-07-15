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
    "who are you": "I am a chatbot created to answer questions about Thulani Mtshwelo and this portfolio website.",
    "who is thulani": "Thulani Mtshwelo is a full-stack developer and the founder of AutoPromote, building scalable platforms and intelligent systems.",
    "where are you from": "Thulani is based in Cape Town, South Africa, and brings a unique perspective to technology and innovation.",
    "what can you tell me about him": "Thulani is a dedicated software engineer with experience in enterprise environments, Azure AD, and independent product development.",
    "what is your personality": "Thulani is curious, determined, and always eager to learn and collaborate on exciting projects.",
    "what do you do": "I answer questions about Thulani's skills, experience, projects, and the content of this portfolio.",
    "what skills do you have": "Thulani works with JavaScript, TypeScript, Python, React, Next.js, Vue, Django, Node.js, Postgres, Firebase, Supabase, Azure AD, Power Apps, and Power BI.",
    "tell me about your projects": "The Projects section features apps Thulani built, including the AutoPromote content intelligence platform, several community websites, and AI chatbots.",
    "how can i contact you": "You can reach Thulani using the contact form on this site, or via email at thulani.mtshwelo@capaciti.org.za.",
    "what is thulani good at": "Thulani excels at building efficient, scalable web systems and integrating modern tools to solve real problems.",
    "why did thulani choose to be a developer": "Thulani became a developer because he loves turning ideas into working software and continuously learning.",
    "what makes you love coding": "He loves coding because it allows him to create impactful solutions and experiment with new technologies.",
    "where can i see your resume": "There's a download link in the Resume section where you can get Thulani's CV, Thulani_Mtshwelo_Professional_CV.pdf, directly from the site.",

    "do you have certificates": "Yes, check the Certificates section for a gallery of Thulani's training certificates.",
    "can i see testimonials": "Testimonials from clients and colleagues are available in the Testimonials section of this portfolio.",
    "default": "I didn't catch that. Try asking about Thulani's skills, projects, contact info, or use the site navigation."  };

  const handleSend = () => {
    if (!input.trim()) return;

    setIsTyping(true);
    const question = input.toLowerCase();

    // Keyword-based flexible matching
    let answer = answers[question];
    if (!answer) {
      if (question.includes('portfolio') || question.includes('projects') || question.includes('work')) {
        answer = "The Projects section highlights apps Thulani has built, including AutoPromote and several community websites. Take a look there!";
      } else if (question.includes('skills') || question.includes('technologies') || question.includes('good at') || question.includes('stack')) {
        answer = "You can find a list under Core Technologies: JavaScript, TypeScript, Python, React, Next.js, Vue, Django, Node.js, REST APIs, PostgreSQL, Firebase, Supabase, Azure AD, Power Apps and Power BI.";
      } else if (question.includes('contact') || question.includes('reach') || question.includes('email')) {
        answer = "Use the contact form or email Thulani at thulani.mtshwelo@capaciti.org.za. Details are in the Contact section.";
      } else if (question.includes('resume') || question.includes('cv')) {
        answer = "There's a downloadable CV in the Resume section named Thulani_Mtshwelo_Professional_CV.pdf.";
      } else if (question.includes('certificate')) {
        answer = "Certificates appear in the Certificates section; click any card to view the PDF.";
      } else if (question.includes('testimonial') || question.includes('what people say')) {
        answer = "Testimonials from previous clients and colleagues are shown in the Testimonials section.";
      } else if (question.includes('about') || question.includes('journey') || question.includes('background')) {
        answer = "Head to the About section to read about Thulani's path, values, and current work.";
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
