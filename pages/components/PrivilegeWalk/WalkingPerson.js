import React, { useEffect, useRef, useContext } from 'react';
import anime from 'animejs';
import Image from 'next/image'

import { FirebaseContext } from '../../contexts/database';
import WalkingMan from '../../../public/images/walking-man.png'


const WalkingPerson = (props) => {

  const firebaseContext = useContext(FirebaseContext);
  const personRef = useRef(null);

  function handleClick() {
    setTimeout(() => {
      props.setWalkBool(false);
    }, 0);
  }
  console.log(props.walkBool);

  useEffect(() => {
    if(props.walkBool){
      
      anime({
        targets: personRef.current,
        rotate: '0.04turn',
        duration: 500,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad'
      });
      handleClick();
    }
      
  }, [props.walkBool]);

  return (
    <div className="person-container">
      <div ref={personRef} className="person">
        <Image className="invert-img w-[2.2vw]" src={WalkingMan} alt="Walking woman" width=""/>
      </div>
    </div>
  );
}

export default WalkingPerson;
