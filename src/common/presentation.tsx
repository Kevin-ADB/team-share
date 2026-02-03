import React, { useCallback, useEffect, useState } from 'react';
import '../styles/presentation.css';

export interface ISlide {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface IPresentationProps {
  slides: ISlide[];
}

const Presentation: React.FC<IPresentationProps> = ({ slides }) => {
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
        case 'PageUp':
          previousSlide();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
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

  // 鼠标点击导航
  useEffect(() => {
    let justGainedFocus = false;
    
    const handleFocus = () => {
      justGainedFocus = true;
      // 设置一个短暂的延迟，防止焦点获取时的点击被误判为导航
      setTimeout(() => {
        justGainedFocus = false;
      }, 100);
    };
    
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element;
      // 避免点击链接、按钮等交互元素时触发导航
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        return;
      }
      
      // 如果刚刚获得焦点，忽略这次点击
      if (justGainedFocus) {
        return;
      }
      
      const windowWidth = window.innerWidth;
      const clickX = event.clientX;
      
      // 左半屏点击上一张，右半屏点击下一张
      if (clickX < windowWidth / 2) {
        previousSlide();
      } else {
        nextSlide();
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('click', handleClick);
    };
  }, [nextSlide, previousSlide]);

  // 滚轮导航
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      // 如果按住了 Ctrl 键，保持原有的缩放行为，不阻止默认事件
      if (event.ctrlKey) {
        return;
      }
      
      event.preventDefault();
      
      // 滚轮向上或向左为上一张，向下或向右为下一张
      if (event.deltaY < 0 || event.deltaX < 0) {
        previousSlide();
      } else if (event.deltaY > 0 || event.deltaX > 0) {
        nextSlide();
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, [nextSlide, previousSlide]);

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

      {/* Page number */}
      <div className="page-number">
        {currentSlide + 1} / {totalSlides}
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
    </div>
  );
};

export default Presentation;