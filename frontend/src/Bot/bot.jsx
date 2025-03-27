import React, { useState } from 'react';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Import the down arrow icon
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import CampaignIcon from '@mui/icons-material/Campaign'; // Import the speaker icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsApp icon
import SendIcon from '@mui/icons-material/Send'; // Import Send icon
import { Button } from '@mui/material';
import './bot.css';

const Bot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen); // Toggle the chat window visibility
  };

  return (
    <>
              <div className="bot-icon" onClick={toggleChat}>
        {isChatOpen ? (
          <KeyboardArrowDownIcon style={{ fontSize: '30px', color: 'white' }} />
        ) : (
          <ModeCommentIcon style={{ fontSize: '30px', color: 'white' }} />
        )}
      </div>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="chat-popup">
          <div className="chat-header">
   
<h2 className='chat-title'>Hexanode</h2>
<div className="chat-header-text"></div>

    <h3>Good Day!</h3>
    <p>How can we help?</p>
  </div>

  {/* Message Box */}
  <div className="message-box">
    <div className="message-item">
      <span>Send us a message</span>
      <SendIcon style={{ fontSize: '20px', color: '#007bff' }} />
    </div>
  </div>

  {/* Cards Section */}
  <div className="cards-container">
    <div className="card">
      <h3>Featured Article</h3>
      <p>
        What is Apple Lockdown Mode? Apple unveiled its most restrictive security 
        feature yet, Apple Lockdown Mode. What is it? Who is it meant for? Read all about it here.
      </p>
    </div>

    <div className="card">
      <h3>Introducing Hexnode Gateway for Windows!</h3>
      <p>
        Hexnode Gateway app for Windows streamlines device migration, making
        it easier than ever to move your Windows devices to Hexnode UEM with minimal disruption.
      </p>
    </div>

    <div className="card">
      <h3>Is your business ready for remote work?</h3>
      <p>
        Remote work is here to stay, and so are the vulnerabilities it brings in. 
        Does your company have the tools to drive them out? Take this 4-minute quiz to find out.
      </p>
      <Button variant="contained">Take the quiz</Button>
    </div>
  
<div className="card">
  <h3>Search the Help Center</h3>
  <p>
    Unified Endpoint Management Help | Hexnode  
    Dive through our knowledge base to explore Hexnode UEM's features in detail.
  </p>
</div>

<div className="card">
  <h3>Have a question? Ask the Hexnode community</h3>
  <p>
    Hexnode Connect - Unified Endpoint Management Community  
    The right place to ask questions.
  </p>
  <Button variant="contained">Ask Away!</Button>
</div>

{/* Chat Footer */}
<div className="chat-footer">
  <div className="footer-item">
    <HomeIcon style={{ fontSize: '24px', color: '#007bff' }} />
    <span>Home</span>
  </div>

  <div className="footer-item">
    <MessageIcon style={{ fontSize: '24px', color: '#007bff' }} />
    <span>Messages</span>
  </div>

  <div className="footer-item">
    <CampaignIcon style={{ fontSize: '24px', color: '#007bff' }} />
    <span>News</span>
  </div>
</div>
</div>
</div>
)}
</>
);
};
export default Bot;
