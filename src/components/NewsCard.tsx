import { motion } from "framer-motion";
import { NewsArticle } from "../types/NewsArticle";
import { FiShare2 } from "react-icons/fi";

interface Props {
  article: NewsArticle;
}

const NewsCard = ({ article }: Props) => {
  const formattedDate = article.published_date
    ? new Date(article.published_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const image =
    article.multimedia?.[0]?.url ||
    article.media?.[0]?.["media-metadata"]?.[2]?.url ||
    "/Fallback/NYP.png";

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.abstract,
          url: article.url,
        })
        .catch((err) => console.error("Share failed:", err));
    } else {
      navigator.clipboard
        .writeText(article.url)
        .then(() => alert("Link copied to clipboard!"))
        .catch(() => alert("Failed to copy link"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-green-100 transform transition-transform duration-200 relative group"
    >
      {/*Share*/}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          handleShare();
        }}
        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-green-100 transition z-10 cursor-pointer"
        aria-label="Share article"
      >
        <FiShare2 className="text-green-600" />
      </button>

      {/*image + content*/}
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {image && (
          <img
            loading="lazy"
            src={image}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-4 flex flex-col flex-grow">
          {(formattedDate || article.byline) && (
            <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
              {formattedDate && <span>{formattedDate}</span>}
              {article.byline && (
                <span className="italic truncate text-right ml-2">
                  {article.byline}
                </span>
              )}
            </div>
          )}

          <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {article.title}
          </h2>

          <p className="text-sm text-gray-600 mb-1 line-clamp-3">
            {article.abstract}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

export default NewsCard;
