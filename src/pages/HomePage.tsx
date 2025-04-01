import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";
import HeroSlider from "../components/HeroSlider";
import { Helmet } from "react-helmet";

interface HomePageProps {
  section?: string;
}

const HomePage = ({ section }: HomePageProps) => {
  const { section: routeSection } = useParams();
  const currentSection = section || routeSection || "home";

  return (
    <>
      <Helmet>
        <title>New York Pines | Top News</title>
        <meta
          name="description"
          content="Catch up on the latest stories from around the world with New York Pines."
        />
      </Helmet>
      <div className="p-4 max-w-6xl mx-auto">
        {currentSection === "home" && <HeroSlider />}

        <h1 className="text-3xl font-bold mb-6 capitalize">
          {currentSection === "trending"
            ? "Most Popular"
            : `${currentSection} News`}
        </h1>

        <NewsList section={currentSection} />
      </div>
    </>
  );
};

export default HomePage;
