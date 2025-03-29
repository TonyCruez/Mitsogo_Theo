import React from 'react';
import Header from './Header/header';
import Content from './Content/content';
import CompatibleDevices from './CompatibleDevice/CompatibleDevice';
import Footer from './Footer/footer';
import './App.css';
import Bot from './Bot/bot';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Content />
            <CompatibleDevices />
      </div>
      <Footer />
      <div>
        <Bot/>
      </div>
    </div>
  );
};

export default App;