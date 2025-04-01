# New York Pines (NYT Clone)

New York Pines is a React-based web application that replicates the functionality of a news website, leveraging the New York Times API to fetch and display the latest news articles. The app is built with modern web technologies, including TypeScript, Vite, TailwindCSS, and Redux Toolkit, to ensure a fast, responsive, and maintainable user experience.

## Features

- **Dynamic News Sections**: Browse news articles by categories such as World, Technology, Health, Sports, and more.
- **Trending Articles**: View the most popular articles using the New York Times "Most Viewed" API.
- **Search Functionality**: Search for articles by keywords with real-time filtering and debouncing.
- **Hero Slider**: A visually appealing slider showcasing the top three trending articles.
- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile devices.
- **Scroll to Top**: A floating button for easy navigation back to the top of the page.
- **SEO Optimization**: Meta tags dynamically set for each page using `react-helmet`.

## Tech Stack

- **React + TypeScript**: For building a scalable and type-safe UI.
- **Vite**: For fast development and optimized builds.
- **TailwindCSS**: For styling with utility-first CSS.
- **Redux Toolkit**: For state management, including fetching and storing news articles.
- **Framer Motion**: For smooth animations and transitions.
- **Axios**: For making API requests to the New York Times API.
- **React Router**: For client-side routing.

## Project Structure

The project follows a modular structure for better maintainability:

```
nyt-clone/
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components (e.g., Navbar, Footer, HeroSlider)
│   ├── constants/         # Static data (e.g., news sections)
│   ├── pages/             # Page components (e.g., HomePage, SearchPage, NotFound)
│   ├── routes/            # App routing configuration
│   ├── store/             # Redux store and slices
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables (e.g., NYT API key)
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Installation and Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/nyt-clone.git
   cd nyt-clone
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add your New York Times API key:
     ```
     VITE_NYT_API_KEY=your_api_key_here
     ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality issues.

## ESLint Configuration

The project uses ESLint with TypeScript and React-specific rules. To enable type-aware linting, you can expand the configuration as follows:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

## API Integration

The app integrates with the New York Times API to fetch news articles. It uses the following endpoints:

- **Top Stories API**: Fetches articles by section (e.g., World, Technology).
- **Most Viewed API**: Fetches trending articles.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the app.

## License

This project is licensed under the MIT License.
