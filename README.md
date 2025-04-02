# 📰 New York Pines — A New York Times Clone

New York Pines is a React-based web application that replicates the core functionality and layout of the New York Times homepage. It leverages the official New York Times API to fetch high-quality news content and display it with a modern, responsive, and accessible interface.

This project was developed as part of the Start2Impact Front-End Development path.

## 🔍 Features

- ✅ **Homepage Clone**: A structured, responsive homepage inspired by the layout and flow of nytimes.com.
- ✅ **News Sections**: Browse articles from multiple NYT sections like World, Technology, Health, Sports, and more.
- ✅ **Trending Slider**: A hero slider at the top highlights the 3 most popular articles.
- ✅ **Search**: Keyword-based article search with debounced input.
- ✅ **Load More**: Paginated loading with animated entry of news cards.
- ✅ **Responsive Layout**: Fully optimized for mobile, tablet, and desktop.
- ✅ **SEO Optimization**: Dynamic page titles via `react-helmet`.
- ✅ **Scroll-to-Top button**.
- ✅ **Share Button**: Easily share articles with the Web Share API or copy links.
- ✅ **404 Page**: Friendly "Page Not Found" fallback with return navigation.

## 💡 Bonus Features

- ✅ **Framer Motion** for animations (card entry, transitions, button effects).
- ✅ **Social Footer** with GitHub and LinkedIn.
- ✅ **Hamburger Menu** for mobile navigation.
- ✅ Smooth UX with hover previews, loading skeletons, tooltips, etc.
- ✅ Lazy Loading of images for performance.

## 🛠 Tech Stack

| Tool               | Role                      |
| ------------------ | ------------------------- |
| React + TypeScript | Frontend UI development   |
| Vite               | Blazing-fast build tool   |
| TailwindCSS (v4)   | Utility-first styling     |
| Redux Toolkit      | Global state management   |
| Axios              | Fetching NYT API data     |
| React Router       | Client-side routing       |
| Framer Motion      | Animations & transitions  |
| react-helmet       | SEO & meta tag management |

## 📁 Project Structure

```
nyt-clone/
├── public/                # Static files
├── src/
│   ├── components/        # Reusable components (Navbar, Footer, HeroSlider, etc.)
│   ├── constants/         # Static data (sections, etc.)
│   ├── pages/             # Home, Search, 404
│   ├── store/             # Redux store & slices
│   ├── types/             # TypeScript types
│   ├── App.tsx            # App entry
│   ├── main.tsx           # Root render
│   └── index.css          # Global styles
├── .env                   # API keys (NYT) *not in repository
├── tailwind.config.js     # Tailwind setup
├── vite.config.ts         # Vite config
└── package.json           # Dependencies & scripts
```

## 🚀 Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/andreaferrari95/nyt-clone.git
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**:

   Create a `.env` file and add your NYT API key:

   ```ini
   VITE_NYT_API_KEY=your_api_key_here
   ```

4. **Run the Dev Server**:

   ```bash
   npm run dev
   ```

   Access the app at `http://localhost:5173`.

## 📦 Scripts

- `npm run dev` — Start local dev server
- `npm run build` — Production build
- `npm run preview` — Preview built app
- `npm run lint` — Run ESLint checks

## 🔍 NYT API Integration

Using these endpoints:

- 🔸 **Top Stories API** — by section (e.g., world, technology, etc.)
- 🔸 **Most Popular API** — top trending articles

More info: [NYT Developer Docs](https://developer.nytimes.com/).

## 📣 Credits

Developed by Andrea Ferrari as part of the Start2Impact curriculum.

Special thanks to:

- 📰 New York Times API
- 💻 Open source libraries and tools

## 📄 License

MIT — free to use, fork, and build upon.
