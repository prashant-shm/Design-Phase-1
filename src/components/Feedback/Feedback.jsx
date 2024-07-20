import React from 'react';
import Cta from '../Buttons/Cta';
import "./Feedback.css"


const Feedback = () => {
    return (
        <>
            <div className="feedback-event">
                <div className="feedback-header">
                    <h1>Your Feedback Matters!</h1>
                </div>
                <div className="feedback-description">
                    <p>Help us build and improve Shmooz with your valuable insights.</p>
                </div>
                <div className="feedback-action">
                    <Cta name="Give Feedback" />
                </div>
            </div>
        </>
    );
}

export default Feedback;
