'use client';

import { useEffect, useState } from "react";
import { FirstSlide } from "../slides/FirstSlide";
import { slides } from '@/const/slides';

export const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const CurrentSlide = slides[currentIndex];

  const handleKeyDown = (e: { code: any; }) => {
    const key = e.code;
    if (key === 'ArrowRight') {
      if (currentIndex !== slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
    if (key === 'ArrowLeft') {
      if (currentIndex !== 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
    {CurrentSlide ? (
      <CurrentSlide />
    ) : (
      <FirstSlide />
    )}
    </>
  )
}
