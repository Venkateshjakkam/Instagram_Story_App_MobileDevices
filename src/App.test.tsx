import React from "react";
import { render, screen } from "@testing-library/react";
import StoryList from "./components/StoryList";
import StoryViewer from "./components/StoryViewer";
import { Story } from "./types";

const mockStories: Story[] = [
  {
	  "id":14,
	  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzxVeabg4ZOQfx8jkEGBInFir2GNDEqE-1g&s",
	  "alt": "demoImg13",
		"fName":"Daniel"
	},
	{
	  "id":15,
	  "imageUrl": "https://www.creativehatti.com/wp-content/uploads/2024/03/Banner-of-happy-womens-day-template-1-Small.jpg",
	  "alt": "demoImg15",
		"fName":"Robin"
	}
];

test("renders StoryList with all stories", () => {
  render(<StoryList stories={mockStories} onSelectStory={() => {}} />);
  
  
  expect(screen.getAllByRole("img").length).toBe(2);
});

test("renders StoryViewer with first story", () => {
  render(<StoryViewer stories={mockStories} initialStoryIndex={0} onClose={() => {}} />);
  
  expect(screen.getByRole("img")).toHaveAttribute("src");
});

test("renders StoryViewer with first story", () => {
  render(<StoryViewer stories={mockStories} initialStoryIndex={0} onClose={() => {}} />);

  const images = screen.getAllByRole("img");

  
  expect(images[0]).toHaveAttribute("src");
});