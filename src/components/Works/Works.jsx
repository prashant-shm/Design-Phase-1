import React, { useState } from 'react';
import "./Works.css";
import Cta from '../Buttons/Cta';
import Steps from '../Steps/Steps';
import forAttendees from "../../data/forAttendees.js";
import forOrganizers from "../../data/forOrganizers.js";

const Works = () => {
    // State to track which data to display and which button is active
    const [currentData, setCurrentData] = useState(forAttendees);
    const [activeButton, setActiveButton] = useState('For Attendees');

    // Handle button click to switch data
    const handleButtonClick = (data, buttonName) => {
        setCurrentData(data);
        setActiveButton(buttonName);
    };

    return (
        <>
            <div className='works-container'>
                <div className="works-heading">
                    <h1>How it Works</h1>
                </div>
                <div className="works-data">
                    <div className="works-btns">
                        <Cta 
                            name="For Attendees" 
                            onClick={() => handleButtonClick(forAttendees, 'For Attendees')}
                            transparent={activeButton === 'For Organizers'}
                        />
                        <Cta 
                            name="For Organizers" 
                            transparent={activeButton === 'For Attendees'}
                            onClick={() => handleButtonClick(forOrganizers, 'For Organizers')}
                        />
                    </div>
                    <div className="works-steps-container">
                        {currentData.map((step, index) => (
                            <Steps
                                key={index}
                                heading={step.heading}
                                imageUrl={step.imageUrl}
                                imageAlt={step.imageAlt}
                                description={step.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Works;
