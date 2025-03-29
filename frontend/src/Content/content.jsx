import React, { useState } from 'react';
import image1 from '../assets/justin-modrak.webp';  
import image2 from '../assets/dalibor-kruljac.webp';
import image3 from '../assets/chris-robinson.webp';
import image4 from '../assets/interactive-kiosk-image.webp';
import image5 from '../assets/asam-kiosk-image.webp';
import tab1 from '../assets/single-app-kios-image.webp';
import tab2 from '../assets/multi-app-kiosk-image.webp';
import tab3 from '../assets/web-based-kiosk-image.webp';
import cont1 from '../assets/effortless-kiosk-deployement-image.webp';
import cont2 from '../assets/customized-interface-image.webp';
import cont3 from '../assets/power-up-protection-image.webp';
import cont4 from '../assets/secure-app-ecosystem.webp';
import cont5 from '../assets/easy-to-use-interface-image.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './content.css';

const Content = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [visibleParagraph, setVisibleParagraph] = useState(0); 
    const [currentCard, setCurrentCard] = useState(0);

    const handleToggle = (index) => {
        setVisibleParagraph(visibleParagraph === index ? null : index);
    };

    const cards = [
        {
            image: image1,
            quote: 'Hexnode is of great value. Works great with Android and iOS!',
            name: 'Justin Modrak',
            designation: 'Technology Coordinator, East Troy Community School District',
        },
        {
            image: image2,
            quote: 'Most complete MDM solution I found, and I tested many of them, including major names',
            name: 'Dalibor Kruljac',
            designation: 'KAVELEYA LTD',
        },
        {
            image: image3,
            quote: 'It seemed to be in-line with everything we were looking at.',
            name: 'Chris Robinson',
            designation: 'Executive Account Manager, NCS',
        },
    ];

    const handleNext = () => {
        setCurrentCard((prev) => (prev + 1) % cards.length); 
    };

    const handlePrev = () => {
        setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length); 
    };

    const tabs = [
        {
            title: 'Single App Kiosk',
            subtitle: 'Lock devices to a single app',
            content: [
                'Restrict devices to a single app for focused usage.',
                'Ideal for POS systems, kiosks, and digital signage.',
                'Enhance security by preventing access to other apps.',
            ],
            image: tab1,
        },
        {
            title: 'Multi-App Kiosk',
            subtitle: 'Allow multiple apps',
            content: [
                'Enable access to a set of approved apps.',
                'Perfect for educational or enterprise use cases.',
                'Maintain control while offering flexibility.',
            ],
            image: tab2,
        },
        {
            title: 'Web-Based Kiosk',
            subtitle: 'Restrict to web apps',
            content: [
                'Lock devices to specific web applications.',
                'Ensure secure browsing for specific use cases.',
                'Great for customer-facing web portals.',
            ],
            image: tab3,
        },
        {
            title: 'Digital Signage Kiosk',
            subtitle: 'Display dynamic content',
            content: [
                'Turn devices into digital signage displays.',
                'Showcase advertisements, announcements, or schedules.',
                'Manage content remotely with ease.',
            ],
            image: image4,
        },
        {
            title: 'ASAM Kiosk',
            subtitle: 'Advanced kiosk management',
            content: [
                'Leverage advanced kiosk management features.',
                'Ensure compliance and security for all devices.',
                'Streamline deployment and updates.',
            ],
            image: image5,
        },
    ];
    
    const toggleImages = [cont1, cont2, cont3, cont4, cont5];

    return (
        <>
            <section className="kiosk-modes-section">
                <div className="container">
                    <h2 className="section-heading">Specific kiosk modes for unique use cases</h2>

                    <div className="tabs-container">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        <div className="tab-content-inner">
                            <div className="tab-text">
                                {tabs[activeTab].subtitle && (
                                    <h3 className="tab-subtitle">{tabs[activeTab].subtitle}</h3>
                                )}

                                <ul className="feature-list">
                                    {tabs[activeTab].content.map((line, index) => (
                                        <li key={index} className="feature-item">
                                            <span className="check-icon">✓</span>
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="tab-image">
                                <img 
                                    src={tabs[activeTab].image} 
                                    alt={`${tabs[activeTab].title}`} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="additional-features-section">
                <div className="container">
                    <h2 className="section-heading">What additional possibilities does the Kiosk mode offer?</h2>

                    <div className="toggle-container">
                        <div className="toggle-image">
                            {visibleParagraph !== null && (
                                <img 
                                    src={toggleImages[visibleParagraph]} 
                                    alt={`Feature ${visibleParagraph + 1}`}
                                />
                            )}
                        </div>

                        <div className="toggle-content">
                            <div 
                                className={`toggle-item ${visibleParagraph === 0 ? 'active' : ''}`}
                                onClick={() => handleToggle(0)}
                            >
                                <h3 className="toggle-title">Effortless kiosk deployment & management</h3>
                                {visibleParagraph === 0 && (
                                    <p className="toggle-text">
                                        Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise,
                                        Samsung Knox, or ROM with Hexnode App on the devices by
                                        collaborating with OEM vendors who provide specially configured ROMs.
                                    </p>
                                )}
                            </div>

                            <div 
                                className={`toggle-item ${visibleParagraph === 1 ? 'active' : ''}`}
                                onClick={() => handleToggle(1)}
                            >
                                <h3 className="toggle-title">Customized interface for brand visibility</h3>
                                {visibleParagraph === 1 && (
                                    <p className="toggle-text">
                                        Create a locked-down environment with a customized interface. Maximize brand
                                        visibility and leave a lasting impression by showcasing products, services, and
                                        key messages directly to users through the customized interface.
                                    </p>
                                )}
                            </div>

                            <div 
                                className={`toggle-item ${visibleParagraph === 2 ? 'active' : ''}`}
                                onClick={() => handleToggle(2)}
                            >
                                <h3 className="toggle-title">What more can you do with Hexnode kiosk?</h3>
                                {visibleParagraph === 2 && (
                                    <p className="toggle-text">
                                        Ensure compliance of devices by remotely deploying the latest OS version while the devices still in kiosk mode. 
                                        Prevent your data from falling into the wrong hands even in case of device loss / theft with the various 
                                        remote management features.
                                    </p>
                                )}
                            </div>

                            <div 
                                className={`toggle-item ${visibleParagraph === 3 ? 'active' : ''}`}
                                onClick={() => handleToggle(3)}
                            >
                                <h3 className="toggle-title">Secure and update your app ecosystem</h3>
                                {visibleParagraph === 3 && (
                                    <p className="toggle-text">
                                        Streamline the deployment and management on apps on your kiosk devices.
                                        Save your time and effort, ensure security and improve your efficiency
                                        using Hexnode's silent app installation and update features.
                                    </p>
                                )}
                            </div>

                            <div 
                                className={`toggle-item ${visibleParagraph === 4 ? 'active' : ''}`}
                                onClick={() => handleToggle(4)}
                            >
                                <h3 className="toggle-title">Provide an easy-to-use interface for end-users</h3>
                                {visibleParagraph === 4 && (
                                    <p className="toggle-text">
                                        Give your end-users the power to control their devices
                                        without overwhelming them with options. An intuitive interface
                                        to let them access only the essential settings they need. Make
                                        it easy for them to unlock the full potential of your devices hassle-free.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-heading">Why should you choose Hexnode?</h2>

                    <div className="testimonial-slider">
                        <button className="slider-arrow prev-arrow" onClick={handlePrev}>
                            <ArrowBackIosIcon />
                        </button>

                        <div className="testimonial-card">
                            <div className="testimonial-image">
                                <img
                                    src={cards[currentCard].image}
                                    alt={cards[currentCard].name}
                                />
                            </div>

                            <div className="testimonial-content">
                                <p className="testimonial-quote">"{cards[currentCard].quote}"</p>
                                <h3 className="testimonial-name">{cards[currentCard].name}</h3>
                                <p className="testimonial-designation">{cards[currentCard].designation}</p>
                            </div>
                        </div>

                        <button className="slider-arrow next-arrow" onClick={handleNext}>
                            <ArrowForwardIosIcon />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;