import React, { useState, useEffect } from 'react';
import { BiTrendingUp } from 'react-icons/bi';
import { ScrollButton } from './BtnUp.style';

export default function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
    }, []);
  
    return (
      <>
        {isVisible && (
          <ScrollButton
            type="button"
            onClick={scrollToTop}
            isVisible={isVisible}
          >
            <BiTrendingUp fontSize="large" />
          </ScrollButton>
        )}
      </>
    );
  }