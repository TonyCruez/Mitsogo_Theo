import React from 'react';
import './header.css';
import kiosk_image from '../assets/hexnode-kiosk.webp';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Header = () => {

    const handleTrialClick = () => {
        window.location.href = 'https://www.hexnode.com/mobile-device-management/cloud/signup/'; // Replace with your des
    };

    return (
        <>      
        <div className="top-header">
            <p style={{ textAlign: 'left', marginLeft: '10px' }}>
                <a href="https://www.hexnode.com" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
                    hexnode
                </a>
                <Button variant="contained" color="error" style={{ marginLeft: '750px' }} onClick={handleTrialClick}>
                    14 Day Free Trial
                </Button>
            </p>
        </div>

        <header className="header">
            <div className="header-content">
                <div className="text-container">
                    <h1>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
                    <div className="work-email-container">
                        <TextField 
                            sx={{ backgroundColor: 'white' }}
                            id="outlined-basic"
                            className="work-email"
                            placeholder="Your Work Email"
                            variant="outlined"
                        />





<Button variant="contained" color="error" className="work-start">Contained</Button>

                </div>
            </div>
            <img src={kiosk_image} alt="Kiosk" className="header-image" />
        </div>

    </header>
    <div className="header-bottom">
        <div className="left-content">
            <p>
                Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.
            </p>
        </div>
        <div className="center-content">
            <p>
                Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.
            </p>
        </div>
        <div className="right-content">
            <p>
                Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.
            </p>
        </div>
    </div>
</>
    );
};

export default Header;