import React, { useState } from "react";
import "./LandingPage.css";
import Home from "./Home";
import Transition from "./Transition";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function MainLandingPage() {
  const [transitionComplete, setTransitionComplete] = useState(false);
  const contact = useSelector((state) => state.portfolio.contact);

  const handleTransitionComplete = () => {
    setTransitionComplete(true);
  };

  return (
    <div>
      {!transitionComplete && (
        <Transition onComplete={handleTransitionComplete} />
      )}
      {transitionComplete && (
        <div>
          <Home />
          <div className=" rounded-lg flex flex-row justify-center w-full space-x-4 fixed bottom-0">
        <a href={`tel:${contact.phone}`} className="text-2xl">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href={`mailto:${contact.email}`} className="text-2xl">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-2xl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
        </div>
      )}
    </div>
  );
}

export default MainLandingPage;
