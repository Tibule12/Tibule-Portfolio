import React from 'react';
import LandbotImage from './images/Landbot.png';
import WatsonxImage from './images/watsonx.png';

const AIChatbotTools = () => {
  return (
    <section id="ai-chatbot-tools" className="section">
      <h2>Materials and Tools Used to Build AI Chatbots</h2>
      <p>
        Building sophisticated AI chatbots requires leveraging powerful platforms and tools that enable seamless conversational experiences. Two of the key tools I have utilized in my AI chatbot projects are <strong>Landbot</strong> and <strong>watsonx</strong>.
      </p>
      <div className="tools-container">
        <div className="tool-card landbot">
          <img src={LandbotImage} alt="Landbot Logo" className="tool-image" />
          <h3>Landbot</h3>
          <p>
            Landbot is an intuitive no-code chatbot builder that allows rapid development of conversational interfaces. It provides a visual drag-and-drop interface to design complex chatbot flows without extensive programming knowledge. Landbot supports integration with various messaging platforms and APIs, enabling rich user interactions and data collection.
          </p>
        </div>
        <div className="tool-card watsonx">
          <img src={WatsonxImage} alt="watsonx Logo" className="tool-image" />
          <h3>watsonx</h3>
          <p>
            watsonx is IBM's next-generation AI and data platform that offers advanced natural language processing, machine learning, and AI model deployment capabilities. Using watsonx, I have been able to build intelligent chatbots that understand context, manage conversations dynamically, and provide personalized responses. Its robust AI services empower chatbots to deliver enterprise-grade performance and scalability.
          </p>
        </div>
      </div>
      <p>
        By combining Landbot's user-friendly design environment with watsonx's powerful AI capabilities, I have created chatbots that are both easy to build and highly intelligent, delivering exceptional user experiences.
      </p>
    </section>
  );
};

export default AIChatbotTools;
