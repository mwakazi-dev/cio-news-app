# CIO News App - React js, Typescript, Tailwind

## Project Overview

This project is a news app built with React js, Typescript, Tailwind. It provides users with the latest news articles from various sources.

## Setup Instructions

1. Clone the repository:

` git clone [https://github.com/mwakazi-dev/cio-news-app] cd [cio-news-app]`

2. Install dependencies:

   `npm install`

3. Start the local server:
   `json-server --watch db.json --port 8000`

4. Start the app:
   `npm run start`

5. Run unit test:
   `npm run test`
6. Run lint:
   `npm run lint`

## Project Structure

- `src/__tests__/`: All Unit tests
- `src/pages/`: All pages
- `src/assets/`: Images and icons
- `src/components/`: Reusable React components
- `src/constants/`: For code clarity and consistency
- `lib/`: reusable functions and utilities
- `services/`: Services for API calls
- `styles/`: Handle all application styles
- `types/`: TypeScript type definitions

## Key Features

- **News Feed**: Displays the latest news articles from various sources.

- **Responsive Design**: Ensures a seamless experience across devices.

## Approach and Rationale

1. **TypeScript**: Implemented for improved code quality and maintainability.

2. **Modular Component Structure**: Enhances reusability and maintainability.

3. **Eslint and Prettier**: Ensures consistent code style and readability

4. **Tailwind CSS**: For rapid UI development and responsiveness.

5. **Husky precommit hooks**: Enforces code quality and consistency

6. **Documentation**: Added comments and documentation to enhance code readability and collaboration.

## Future Improvements

- Styling DRY principles
- Implement Storybook for component documentation, testing and team collaboration
- Refactor the codebase to follow best practices and improve code quality
- Improve testing coverage
- Implement a search functionality
- Implement a dark
- Increease responsiveness to enhance user experience
