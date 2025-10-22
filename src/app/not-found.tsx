import Link from "next/link";

const NotFound = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-[#0F1115] text-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="w-full bg-background cursor-pointer mt-3 py-3 px-5 flex gap-2 justify-center items-center rounded-lg border border-gray-700 text-gray-200 transition-all hover:border-red-500 hover:text-red-500"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
