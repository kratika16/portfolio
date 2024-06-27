import React, { useEffect, useState } from 'react';
import './Transition.css';

const Transition = ({ onComplete }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            onComplete();
        }, 3000); // Duration of the transition (3 seconds)
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        show && (
            <div className="portfolio-logo-container">
                <div className="portfolio-logo">
                    <span className="letter">K</span>
                    <span className="letter">r</span>
                    <span className="letter">a</span>
                    <span className="letter">t</span>
                    <span className="letter">i</span>
                    <span className="letter">k</span>
                    <span className="letter">a</span>
                    <span className="letter"><span>&nbsp;</span> </span>
                    <span className="letter">Y</span>
                    <span className="letter">a</span>
                    <span className="letter">d</span>
                    <span className="letter">a</span>
                    <span className="letter">v</span>
                </div>
            </div>
        )
    );
};

export default Transition;
