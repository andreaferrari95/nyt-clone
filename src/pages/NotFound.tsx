import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not Found | New York Pines</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist on New York Pines."
        />
      </Helmet>

      <div className="text-center py-20 px-4">
        <h1 className="text-4xl font-bold mb-4 text-green-600">404</h1>
        <p className="text-lg mb-4">Oops! Page not found.</p>
        <a
          href="/"
          className="text-green-600 font-semibold underline hover:text-green-700"
        >
          Go back home
        </a>
      </div>
    </>
  );
};

export default NotFound;
