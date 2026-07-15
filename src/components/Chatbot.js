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
    "who is thulani mtshwelo": "Thulani Mtshwelo is a full-stack developer and the founder of AutoPromote, building scalable platforms and intelligent systems.",
    "what is your name": "I am Tibule, the chatbot assistant for Thulani Mtshwelo's portfolio.",
    "what do you do": "I answer questions about Thulani's skills, experience, projects, and the content of this portfolio.",
    "where are you from": "Thulani is based in Cape Town, South Africa, and brings a unique perspective to technology and innovation.",
    "what can you tell me about him": "Thulani is a dedicated software engineer with experience in enterprise environments, Azure AD, and independent product development.",
    "what is your personality": "Thulani is curious, determined, and always eager to learn and collaborate on exciting projects.",
    "what skills do you have": "Thulani works with JavaScript, TypeScript, Python, React, Next.js, Vue, Django, Node.js, PostgreSQL, Firebase, Supabase, Azure AD, Power Apps, and Power BI.",
    "what technologies do you use": "Thulani works with JavaScript, TypeScript, Python, React, Next.js, Vue, Django, Node.js, PostgreSQL, Firebase, Supabase, Azure AD, Power Apps, and Power BI.",
    "tell me about your projects": "The Projects section features apps Thulani built, including the AutoPromote content intelligence platform, several community websites, and AI chatbots.",
    "what projects have you worked on": "The Projects section features apps Thulani built, including the AutoPromote content intelligence platform, several community websites, and AI chatbots.",
    "how can i contact you": "You can reach Thulani using the contact form on this site, or via email at thulani.mtshwelo@capaciti.org.za.",
    "how do i contact thulani": "You can reach Thulani using the contact form on this site, or via email at thulani.mtshwelo@capaciti.org.za.",
    "what is thulani good at": "Thulani excels at building efficient, scalable web systems and integrating modern tools to solve real problems.",
    "why did thulani choose to be a developer": "Thulani became a developer because he loves turning ideas into working software and continuously learning.",
    "what makes you love coding": "He loves coding because it allows him to create impactful solutions and experiment with new technologies.",
    "where can i see your resume": "There's a download link in the Resume section where you can get Thulani's CV, Thulani_Mtshwelo_Professional_CV.pdf, directly from the site.",
    "can i download your cv": "Yes, you can download Thulani's CV from the Resume section as Thulani_Mtshwelo_Professional_CV.pdf.",
    "do you have certificates": "Yes, check the Certificates section for a gallery of Thulani's training certificates.",
    "can i see testimonials": "Testimonials from clients and colleagues are available in the Testimonials section of this portfolio.",
    "do you have testimonials": "Yes, the Testimonials section showcases feedback from clients and colleagues.",
    "what is your experience": "Thulani has experience building products in enterprise settings, working with Azure AD, and developing modern software solutions independently.",
    "what is your background": "Thulani's background spans software engineering, product development, digital transformation, and AI-driven solutions.",
    "what is your education": "His experience is shaped by practical software development work, professional training, and continuous self-learning.",
    "what are your services": "Thulani builds web applications, intelligent systems, and digital solutions tailored to real-world needs.",
    "are you available for work": "Yes, you can use the contact form to discuss opportunities or collaborations.",
    "can i hire you": "Yes, you can reach out through the contact form to discuss collaboration or project opportunities.",
    "what is your email": "You can contact Thulani at thulani.mtshwelo@capaciti.org.za.",
    "where is your office": "Thulani is based in Cape Town, South Africa.",
    "what is your location": "Thulani is based in Cape Town, South Africa.",
    "what is auto promote": "AutoPromote is one of the projects highlighted in this portfolio, focused on content intelligence and digital growth.",
    "what is your linkedin": "You can connect through the contact section or use the site navigation to find the relevant profile links.",
    "what is your github": "You can explore Thulani's work through the projects featured on this portfolio site.",
    "default": "I didn't catch that. Try asking about Thulani's skills, projects, experience, contact info, certifications, resume, or testimonials."  };

  const getAnswer = (question) => {
    if (answers[question]) {
      return answers[question];
    }

    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes('resume') || lowerQuestion.includes('cv')) {
      return "You can download Thulani's CV from the Resume section as Thulani_Mtshwelo_Professional_CV.pdf.";
    }

    if (lowerQuestion.includes('project') || lowerQuestion.includes('portfolio') || lowerQuestion.includes('work') || lowerQuestion.includes('built') || lowerQuestion.includes('app')) {
      return "The Projects section highlights apps and platforms Thulani has built, including AutoPromote and several community-focused websites.";
    }

    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('stack') || lowerQuestion.includes('programming')) {
      return "Thulani works with JavaScript, TypeScript, Python, React, Next.js, Vue, Django, Node.js, PostgreSQL, Firebase, Supabase, Azure AD, Power Apps, and Power BI.";
    }

    if (lowerQuestion.includes('contact') || lowerQuestion.includes('email') || lowerQuestion.includes('reach') || lowerQuestion.includes('hire')) {
      return "You can contact Thulani through the contact form on this site or via email at thulani.mtshwelo@capaciti.org.za.";
    }

    if (lowerQuestion.includes('certificate') || lowerQuestion.includes('training')) {
      return "Yes, the Certificates section contains a gallery of Thulani's professional training certificates.";
    }

    if (lowerQuestion.includes('testimonial') || lowerQuestion.includes('feedback') || lowerQuestion.includes('client')) {
      return "Testimonials and feedback are available in the Testimonials section of the portfolio.";
    }

    if (lowerQuestion.includes('experience') || lowerQuestion.includes('background') || lowerQuestion.includes('career')) {
      return "Thulani has experience building digital products, working in enterprise environments, and creating solutions that blend modern technology with practical outcomes.";
    }

    if (lowerQuestion.includes('location') || lowerQuestion.includes('where') || lowerQuestion.includes('from')) {
      return "Thulani is based in Cape Town, South Africa.";
    }

    if (lowerQuestion.includes('price') || lowerQuestion.includes('cost') || lowerQuestion.includes('rate')) {
      return "Pricing depends on the scope of the project, so the best next step is to contact Thulani through the form on the site.";
    }

    return answers.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setIsTyping(true);
    const question = input.toLowerCase();

    const answer = getAnswer(question);

    setChatLog((prevChatLog) => [...prevChatLog, { question: input, answer }]);
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
