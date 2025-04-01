import { useLocation } from "react-router-dom";
import NewsList from "../components/NewsList";
import { Helmet } from "react-helmet";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchPage = () => {
  const query = useQuery().get("q") ?? "";

  return (
    <>
      <Helmet>
        <title>Search results for "{query}" | New York Pines</title>
        <meta
          name="description"
          content={`Browse news articles related to "${query}" on New York Pines.`}
        />
      </Helmet>

      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for "<span className="text-green-600">{query}</span>"
        </h1>
        <NewsList section="home" externalSearch={query} />
      </div>
    </>
  );
};

export default SearchPage;
