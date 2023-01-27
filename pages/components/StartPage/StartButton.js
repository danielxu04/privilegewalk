import React, { useRef } from 'react';
import anime from 'animejs';

function StartButton() {
  const buttonRef = useRef(null);
  const pulseRef = useRef(null);
  const labelRef = useRef(null);

  const handleClick = () => {
    anime({
      targets: buttonRef.current,
      scale: [1, 1.4],
      duration: 800,
      elasticity: 400,
    });
    anime({
      targets: pulseRef.current,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 800,
      easing: 'easeInOutQuad',
    });
    anime({
      targets: labelRef.current,
      translateX: [0, -30],
      opacity: [1, 0],
      duration: 800,
      easing: 'easeInOutQuad',
    });
  };

  return (
    <div className="px-3 py-2 font-interMedium text-lg transition-050s justify-center rounded-lg cream-background start-btn w-[8vw]">
      <div className="pulse" ref={pulseRef} />
      <button
        ref={buttonRef}
        className="start-button"
        onClick={handleClick}
      >
        <span ref={labelRef} className="start-label">Start</span>
      </button>
    </div>
  );
}

export default StartButton;
