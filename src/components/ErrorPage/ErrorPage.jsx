import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0D18] text-white px-4">
      {/* Icon */}
      <FaExclamationTriangle className="text-red-500 text-6xl mb-6 animate-pulse" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        404 - Page Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-400 text-lg md:text-xl mb-8 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition duration-300"
      >
        ← Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
