import React, { useState, useEffect, useCallback } from 'react';

export interface Slide {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface PresentationProps {
  slides: Slide[];
  title?: string;
}

const Presentation: React.FC<PresentationProps> = ({ slides, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides]);

  const previousSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch(event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          previousSlide();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ': // Space bar
          event.preventDefault();
          nextSlide();
          break;
        case 'Home':
          goToSlide(0);
          break;
        case 'End':
          goToSlide(totalSlides - 1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextSlide, previousSlide, goToSlide, totalSlides]);

  // 初始化日志
  useEffect(() => {
    console.log(`🎯 ${title || 'Presentation'} initialized!`);
    console.log('📊 Total slides:', totalSlides);
    console.log('⌨️  Use arrow keys or space to navigate');
    console.log('🏠 Press Home/End to go to first/last slide');
  }, [totalSlides, title]);

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="presentation-container">
      {/* Progress bar */}
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          id={slide.id}
        >
          {slide.content}
        </div>
      ))}

      {/* Navigation */}
      <div className="navigation">
        <button 
          className="nav-btn"
          onClick={previousSlide}
          disabled={currentSlide === 0}
        >
          ← 上一页
        </button>
        <span className="slide-counter">
          {currentSlide + 1} / {totalSlides}
        </span>
        <button 
          className="nav-btn"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
        >
          下一页 →
        </button>
      </div>
    </div>
  );
};

export default Presentation;