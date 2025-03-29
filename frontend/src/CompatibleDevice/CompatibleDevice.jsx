import React from 'react';
import './CompatibleDevice.css'
import AndroidIcon from '@mui/icons-material/Android';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

const CompatibleDevices = () => {

    function MicrosoftLogo({ size = 100 }) {
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
            className="microsoft-logo"
          >
            <rect x="1" y="1" width="10" height="10" fill="#F25022" />
            <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
            <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
            <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
          </svg>
        );
    };      
    function IOSLogo({ size = 100 }) {
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="ios-logo"
          >
            {/* White background circle */}
            <circle cx="12" cy="12" r="10" fill="#FFFFFF" />
            {/* "iOS" text in black */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              fill="#000000"
              fontSize="10"
              fontFamily="Arial, sans-serif"
              fontWeight="bold"
            >
              iOS
            </text>
          </svg>
        );
      };  
  return (
    <section className="compatible-devices-section">
      <div className="container">
        <h2 className="section-heading">Platforms supported        </h2>
        
        <div className="platforms-container">
          <div className="platform-card">
            <AndroidIcon className="platform-icon android" />
          </div>
          
          <div className="platform-card">
            <MicrosoftLogo size={100}/> 
          </div>
          
          <div className="platform-card">
            <IOSLogo/>
          </div>
          
          <div className="platform-card">
            <Grid3x3Icon className="platform-icon other" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompatibleDevices;