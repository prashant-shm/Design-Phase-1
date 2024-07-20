import React from 'react'
import "./Cta.css"

const Cta = ({ name, onClick, transparent }) => {
    const ctaClass = transparent ? "cta-btn transparent" : "cta-btn";
    return (
        <>
            <button className={ctaClass} onClick={onClick}>
                {name}
            </button>
        </>
    )
}

export default Cta;
