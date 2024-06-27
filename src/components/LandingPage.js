import React, { useState } from "react";
import "./LandingPage.css";
import Home from "./Home";
import Transition from "./Transition";

function MainLandingPage() {
  const [transitionComplete, setTransitionComplete] = useState(false);

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
        </div>
      )}
    </div>
  );
}

export default MainLandingPage;
