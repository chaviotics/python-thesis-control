import React, { useRef } from 'react';
import Intro from './Intro';
import TopicOutline from './TopicOutline';

function HomePage() {
  const scrollRef = useRef(null);

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Intro onButtonClick={handleButtonClick} />
      <TopicOutline ref={scrollRef} />
    </>
  );
}

export default HomePage;
