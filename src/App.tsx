import React, { useState } from 'react';
import StoryList from './components/StoryList';
import StoryViewer from './components/StoryViewer';
import stories from './stories.json';
import { Story } from './types';

const App: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  const handleSelectStory = (story: Story) => {
    setSelectedStory(story);
  };

  const handleCloseStoryViewer = () => {
    setSelectedStory(null);
  };

  return (
    <div className="app">
      <h1 className="app-title">Instagram Stories</h1>
      <StoryList stories={stories} onSelectStory={handleSelectStory} />
      {selectedStory && (
        <StoryViewer
          stories={stories}
          initialStoryIndex={stories.findIndex((story) => story.id === selectedStory.id)}
          onClose={handleCloseStoryViewer}
        />
      )}
    </div>
  );
};

export default App;