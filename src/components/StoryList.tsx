import React from 'react';
import { Story } from '../types';
import '../index.css';

interface StoryListProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

const StoryList: React.FC<StoryListProps> = ({ stories, onSelectStory }) => {
    
  return (
    <div className="story-list-container">
      <div className="story-list">
        {stories.map((story) => (
          <div key={story.id} className="story-item" onClick={() => onSelectStory(story)}>
            <div className="story-image-container">
              <img src={story.imageUrl} alt={`Story ${story.alt}`} className="story-thumbnail" />
            </div>
            <p className="story-name">{story.fName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryList;