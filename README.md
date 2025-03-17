# Build an Apple News Clone with React Native and Expo

## Overview

This tutorial demonstrates how to create an Apple News clone using **React Native** and **Expo**, specifically for beginners. It walks through project setup, building several components, and implementing navigation.

## Key Features

- **News Feed Screen:** Displays articles in a structured and visually appealing format using markdown.
- **Magazine Screen:** Shows magazines in rows of two, with filtering options.
- **Article Detail Screen:** Presents the details of a selected article in a clean layout.

## Modules and Libraries Used

- `react-native`
- `expo`
- `react-native-markdown-display`: For rendering markdown content.

## Steps to Follow

### 1. Project Setup

- Start by setting up a new Expo project.
- Install necessary dependencies.

### 2. Create the News Feed

- Use a `FlatList` to render articles, passing in the data retrieved from a JSON file.
- Structure articles using markdown format for better readability.

### 3. Build the Magazine Screen

- Implement a grid view for displaying magazine covers.
- Allow users to filter magazines by categories such as popular or featured.

### 4. Implement Navigation

- Use `expo-router` for easy navigation between screens.
- Create a bottom tab navigator to switch between the news feed and magazine sections.

### 5. Display Article Details

- Create a separate screen to show article details.
- Handle dynamic routing to fetch and display the selected article data.

## Example Code Snippets

### Markdown Integration

```javascript
import Markdown from "react-native-markdown-display";

const ArticleBody = ({ content }) => <Markdown>{content}</Markdown>;
```
