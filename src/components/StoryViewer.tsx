import React, { useEffect, useState } from 'react';
import { Story } from '../types';
import '../index.css';

interface StoryViewerProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ stories, initialStoryIndex, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStoryIndex < stories.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
      } else {
        onClose();
      }
    }, 5000); 

    return () => clearTimeout(timer);
  }, [currentStoryIndex, stories.length, onClose]);

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      handlePrevious(); 
    } else if (deltaX < -50) {
      handleNext(); 
    }

    setTouchStartX(null);
  };

  return (
    <div className="story-viewer" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <button className="close-btn" aria-label="Close" onClick={onClose}>×</button>

      <div className="story-content">
        <button className="prev-btn"  onClick={handlePrevious} disabled={currentStoryIndex === 0}>
          ◀
        </button>

        <img
          src={stories[currentStoryIndex].imageUrl}
          alt={`Story ${stories[currentStoryIndex].id}`}
          className="story-img"
        />

        <button className="next-btn"   onClick={handleNext} disabled={currentStoryIndex === stories.length - 1}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default StoryViewer;