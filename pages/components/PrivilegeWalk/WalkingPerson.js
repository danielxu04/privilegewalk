import React, { useEffect, useRef, useContext } from 'react';
import anime from 'animejs';
import Image from 'next/image'

import { QuestionaireContext } from '../../contexts/questionaire';


const WalkingPerson = (props) => {
  const [questionaireState, dispatch] = useContext(QuestionaireContext);
  const personRef = useRef(null);

  function handleClick() {
      props.setWalkBool(false);
      () => {
        dispatch({ type: 'reset_walk' });
      }
  }
  console.log(props.walkBool);

  useEffect(() => {
    if(props.walkBool){
      
      anime({
        targets: personRef.current,
        rotate: '0.04turn',
        duration: 1000,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
      handleClick();
    }
      
  }, [props.walkBool]);

  return (
    <div className="person-container">
      <div ref={personRef} className="person">
        <Image className="invert-img w-[2.2vw]" src={props.image} width=""/>
      </div>
    </div>
  );
}

export default WalkingPerson;
