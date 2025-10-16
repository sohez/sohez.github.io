export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 animate-pulse">
          🚀 Coming Soon...
        </h1>
        <p className="text-lg text-gray-300">
          I’m currently updating my portfolio with a fresh new design and
          features.
        </p>
        <div className="mt-6">
          <div className="w-48 h-1 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Stay tuned — the new experience is almost ready.
        </p>
      </div>
    </div>
  );
}
