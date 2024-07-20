import React from 'react';
import Cta from '../Buttons/Cta';
import "./AboutEvent.css"


const AboutEvent = () => {
    return (
        <>
            <div className="about-event">
                <div className="about-event-header">
                    <h1 className="about-event-title">Get The Word Out About Your Event</h1>
                </div>
                <div className="about-event-description">
                    <p className="about-event-text">List your event with Surat's only discovery</p>
                    <p className="about-event-text">platform for events and outings, shmooz!</p>
                </div>
                <div className="about-event-action">
                    <Cta name="List Your Event" />
                </div>
            </div>
        </>
    );
}

export default AboutEvent;
