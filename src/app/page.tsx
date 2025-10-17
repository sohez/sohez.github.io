import Hero from "./components/home/Hero";
import Skills from "./components/home/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-4">
          <h1 className=" text-5xl font-extrabold">Working...</h1>
          <p className="text-lg text-gray-300">
            I’m currently updating my portfolio with a fresh new design and
            features.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            Stay tuned — the new experience is almost ready.
          </p>
        </div>
      </div>
    </div>
  );
}
