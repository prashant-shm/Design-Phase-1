import React from 'react';
import "./Steps.css";

const Steps = ({ heading, imageUrl, imageAlt, description }) => {
    return (
        <div className="steps-container">
            <div className="steps-heading">
                <h3>{heading}</h3>
            </div>
            <div className="steps-image">
                <img src={imageUrl} alt={imageAlt} className="step-image" />
            </div>
            <div className="steps-description">
                <p>{description}</p>
            </div>
        </div>
    );
}

// Setting default props
Steps.defaultProps = {
    heading: "Default Heading",
    imageUrl: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1721458200~exp=1721461800~hmac=ed42da478f479f7fde8127ddc44c36ea1d029089f566ed74135ab4607a125e06&w=740",
    imageAlt: "Default Image",
    description: "Default description. Please provide a more specific description."
};

export default Steps;
// ss