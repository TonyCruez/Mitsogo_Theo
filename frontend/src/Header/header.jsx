import React from 'react';
import './header.css';
import kiosk_image from '../assets/hexnode-kiosk.webp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Header = () => {
    const handleTrialClick = () => {
        window.location.href = 'https://www.hexnode.com/mobile-device-management/cloud/signup/';
    };

    return (
        <>      
        <div className="top-header">
            <div className="container">
                <div className="top-header-content">
                    <a href="https://www.hexnode.com" className="logo-link">
                        hexnode
                    </a>
                    <div className="trial-button-container">
                        <Button 
                            variant="contained" 
                            className="trial-button" 
                            onClick={handleTrialClick}
                        >
                            14 Day Free Trial
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        <header className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
                        <div className="cta-container">
                            <TextField 
                                sx={{ 
                                    backgroundColor: 'white',
                                    width: '100%',
                                    maxWidth: '300px',
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '4px 0 0 4px',
                                        height: '48px'
                                    }
                                }}
                                placeholder="Your Work Email"
                                variant="outlined"
                                className="email-input"
                            />
                            <Button 
                                variant="contained" 
                                className="start-button"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={kiosk_image} alt="Hexnode Kiosk" />
                    </div>
                </div>
            </div>
        </header>
        
        <div className="credentials-bar">
            <div className="container">
                <div className="credentials-content">
                    <div className="credential-item">
                        <p>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
                    </div>
                    <div className="credential-item">
                        <p>Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.</p>
                    </div>
                    <div className="credential-item">
                        <p>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Header;