import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const restText = " a passionate Frontend Software Engineer with expertise in HTML, CSS, JavaScript, TypeScript and frameworks like React and Next. I specialize in creating responsive, user-friendly web applications that prioritize performance and cross-browser compatibility. With a keen eye for design and a commitment to seamless user experiences, I translate visual concepts into functional, efficient code. Let's connect and explore how we can bring innovative web solutions to life together!";
  const [displayedText, setDisplayedText] = useState('');
  const [showRest, setShowRest] = useState(false);
  const fullText = "Hello! I'm Kratika Yadav,";
  const interval = 200; // Interval in milliseconds
  const summaryDelay = 1000;

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setShowRest(true);
        }, summaryDelay);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h1 className='text-2xl text-cyan-700  font-extrabold'>{displayedText}</h1>
      {showRest && (
        <p style={{ transition: 'opacity 2s', opacity: showRest ? 1 : 0 }}>
          {restText}
        </p>
      )}
    </div>
  );
};

export default TypingEffect;
