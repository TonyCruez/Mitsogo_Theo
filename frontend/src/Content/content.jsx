import React, { useState } from 'react';
import image1 from '../assets/single-app-kios-image.webp';  
import image2 from '../assets/multi-app-kiosk-image.webp';
import image3 from '../assets/digital-signage-kiosk-image.webp';
import image4 from '../assets/interactive-kiosk-image.webp';
import image5 from '../assets/asam-kiosk-image.webp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './content.css';

const Content = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [visibleParagraph, setVisibleParagraph] = useState(0); // Set default to 0 to show the first image and paragraph
    const [currentCard, setCurrentCard] = useState(0); // State to track the current card

    const handleToggle = (index) => {
        setVisibleParagraph(visibleParagraph === index ? null : index); // Toggle visibility
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
    setCurrentCard((prev) => (prev + 1) % cards.length); // Move to the next card
};

const handlePrev = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length); // Move to the previous card
};

// Define the tabs array
const tabs = [
    {
        title: 'Single App Kiosk',
        subtitle: 'Lock devices to a single app',
        content: [
            'Restrict devices to a single app for focused usage.',
            'Ideal for POS systems, kiosks, and digital signage.',
            'Enhance security by preventing access to other apps.',
        ],
        image: image1,
    },
    {
        title: 'Multi-App Kiosk',
        subtitle: 'Allow multiple apps',
        content: [
            'Enable access to a set of approved apps.',
            'Perfect for educational or enterprise use cases.',
            'Maintain control while offering flexibility.',
        ],
        image: image2,
    },
{
    title: 'Web-Based Kiosk',
    subtitle: 'Restrict to web apps',
    content: [
        'Lock devices to specific web applications.',
        'Ensure secure browsing for specific use cases.',
        'Great for customer-facing web portals.',
    ],
    image: image3,
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
const toggleImages = [image1, image2, image3, image4, image5];

return (
    <>
        <div>
            <h1>Specific kiosk modes for unique use cases</h1>

            {/* Tabs Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                }}
            >
                {/* Tab Buttons */}
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            width: '150px',
                            height: '50px',
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: activeTab === index ? '#000' : '#fff',
color: activeTab == index ? '#fff' : '#000',
border: activeTab == index ? 'none' : '1px solid grey',
borderRadius: '5px',
textAlign: 'center',
}}
>
  {tab.title}
</button>
                ))}
</div>

{/* Main Content */}
<div 
  style={{
    backgroundColor: '#F5F5F5',
    padding: '20px',
    borderRadius: '10px'
  }}
>

  <div 
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px'
    }}
  >
<div style={{ flex: 1 }}>
  {tabs[activeTab].subtitle && (
    <h3 style={{ marginBottom: '15px' }}>{tabs[activeTab].subtitle}</h3>
  )}

  <ul style={{ padding: 0, margin: 0, paddingLeft: '25px' }}>
    {tabs[activeTab].content.map((line, index) => (
      <li 
        key={index}
        style={{
          listStyleType: 'none',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            color: 'green',
            marginRight: '10px',
            flexShrink: 0,
          }}
        >
          ✔
        </span>
        <span style={{ flex: 1 }}>{line}</span>
      </li>
    ))}
  </ul>
</div>
<div style={{ flex: 1, textAlign: 'center' }}>
  <img 
    src={tabs[activeTab].image} 
    alt={`Tab ${activeTab + 1}`} 
    style={{ maxWidth: '100%', borderRadius: '10px' }} 
  />
</div>
</div>
</div>

<h1>What additional possibilities does the Kiosk mode offer?</h1>

<div 
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px'
  }}
>

  {/* Left side: Image */}
  <div style={{ flex: 1, textAlign: 'center' }}>
    {visibleParagraph !== null && (
      <img 
        src={toggleImages[visibleParagraph]} // Display the respective image
        alt={`Toggle ${visibleParagraph + 1}`}
        style={{ maxWidth: '100%', borderRadius: '10px' }}
      />
    )}
  </div>

  {/* Right side: H2 Tags and Paragraphs */}
  <div style={{ flex: 1 }}>
    <h2 
      onClick={() => handleToggle(0)}

  style={{
    cursor: 'pointer',
    color: '#007BFF',
    marginBottom: '15px',
    color: 'black'
  }}
>
  Effortless kiosk deployment & management
</h2>

{visibleParagraph === 0 && (
  <p 
    style={{
      marginTop: '10px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    }}
  >
    Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise,
    Samsung Knox, or ROM with Hexnode App on the devices by
    collaborating with OEM vendors who provide specially configured ROMs.
  </p>
)}

<h2 
  onClick={() => handleToggle(1)}
  style={{
    cursor: 'pointer',
    color: '#007BFF',
    marginBottom: '15px',
    color: 'black'
  }}
>
  Customized interface for brand visibility
</h2>
{visibleParagraph === 1 && (
  <p 
    style={{
      marginTop: '10px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    }}
  >
    Create a locked-down environment with a customized interface. Maximize brand
    visibility and leave a lasting impression by showcasing products, services, and
    key messages directly to users through the customized interface.
  </p>
)}

<h2 
  onClick={() => handleToggle(2)}
  style={{
    cursor: 'pointer',
    color: '#007BFF',
    marginBottom: '15px',
    color: 'black'
  }}
>
  What more can you do with Hexnode kiosk?
</h2>

{visibleParagraph === 2 && (
  <p 
    style={{
      marginTop: '10px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    }}
  >
Ensure compliance 
</p>
)}
<h2 
  onClick={() => handleToggle(3)}
  style={{
    cursor: 'pointer',
    color: '#007BFF',
    marginBottom: '15px',
    color: 'black'
  }}
>
  Secure and update your app ecosystem
</h2>

{visibleParagraph === 3 && (
  <p 
    style={{
      marginTop: '10px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    }}
  >
    Streamline the deployment and management on apps on your kiosk devices.
    Save your time and effort, ensure security and improve your efficiency
    using Hexnode’s silent app installation and update features.
  </p>
)}

<h2 
  onClick={() => handleToggle(4)}
  style={{
cursor: 'poniter',
color: '#007BFF',
marginBottom: '15px',
color: 'black',
  }}
>
  Provide an easy-to-use interface for end-users
</h2>

{visibleParagraph === 4 && (
  <p 
    style={{
      marginTop: '10px',
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#333'
    }}
  >
    Give your end-users the power to control their devices
    without overwhelming them with options. An intuitive interface
    to let them access only the essential settings they need. Make
    it easy for them to unlock the full potential of your devices hassle-free.
  </p>
)}
</div>
</div>

<h1>Why should you choose Hexnode?</h1>

<div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
    padding: '20px',
backgroundColor: '#F5F5F5',
borderRadius: '10px',
boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
position: 'relative'
}}>

<ArrowBackIosIcon
    onClick={handlePrev}
    style={{
        position: 'absolute',
        left: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '24px',
        color: '#007BFF'
    }}
/>


<div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>

<div
    style={{
        flex: 1,
        marginLeft: '20px' // Added margin to the Left side
    }}
>
    <img
        src={cards[currentCard].image}
        alt="Card Image"
        style={{
            maxWidth: '100%',
            borderRadius: '10px',
            objectFit: 'cover'
        }}
    />
</div>

{/* Right Side: Text */}
<div style={{ flex: 2 }}>
    <h3 style={{ marginBottom: '10px', fontSize: '18px', color: '#333' }}>
        "{cards[currentCard].quote}"
    </h3>
    <h2 style={{ fontSize: '20px', color: '#007BFF', marginTop: '20px' }}>
        {cards[currentCard].name}
    </h2>
    <h2 style={{ fontSize: '16px', color: '#555' }}>
        {cards[currentCard].designation}
    </h2>
</div>
{/* Right Arrow */}
<ArrowForwardIosIcon
    onClick={handleNext}
    style={{
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        fontSize: '24px',
        color: '#007BFF',
    }}
/>
</div>
</div>
</div>
</>
);
};
export default Content;
  