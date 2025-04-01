import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchNews, resetNewsState } from "../store/newsSlice";
import NewsCard from "./NewsCard";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

interface NewsListProps {
  section: string;
  externalSearch?: string;
}

const NewsList = ({ section, externalSearch }: NewsListProps) => {
  const dispatch = useAppDispatch();
  const { articles, loading, error } = useAppSelector((state) => state.news);

  const [visibleCount, setVisibleCount] = useState(9);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [searchTerm, setSearchTerm] = useState(externalSearch ?? "");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const prevCountRef = useRef(visibleCount);

  useEffect(() => {
    if (externalSearch !== undefined) setSearchTerm(externalSearch);
  }, [externalSearch]);

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(fetchNews(section));
    setVisibleCount(9);
  }, [dispatch, section]);

  useEffect(() => {
    dispatch(resetNewsState());
    dispatch(fetchNews(section));
    setVisibleCount(9);
  }, [dispatch, section]);

  const filteredArticles = articles.filter((a) =>
    [a.title, a.abstract].some((text) =>
      text.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  );

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    const dateA = new Date(a.published_date || "").getTime();
    const dateB = new Date(b.published_date || "").getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const visibleArticles = sortedArticles.slice(0, visibleCount);
  const hasMore = visibleCount < sortedArticles.length;

  const handleLoadMore = () => {
    prevCountRef.current = visibleCount;
    setVisibleCount((prev) => prev + 9);
  };

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleArticles.map((article, index) => {
            const isNew = index >= prevCountRef.current;
            const card = <NewsCard key={article.url} article={article} />;

            return isNew ? (
              <motion.div
                key={article.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: (index - prevCountRef.current) * 0.1,
                }}
              >
                {card}
              </motion.div>
            ) : (
              card
            );
          })}
        </AnimatePresence>
      </div>
    );
  }
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {!externalSearch && (
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-md border border-gray-300 shadow-lg 
  focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
          />
        )}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
          className="px-4 py-2 rounded-md border border-gray-300 shadow-lg text-sm 
    focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
        >
          <option value="newest">Newest → Oldest</option>
          <option value="oldest">Oldest → Newest</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleArticles.map((article) => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>

      {!loading && visibleArticles.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-2 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="text-sm">No articles found. Try a different keyword.</p>
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-green-600 text-white px-6 py-2 rounded-full transition 
    transform hover:scale-105 active:scale-95 shadow-lg 
    hover:animate-pulse"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsList;
