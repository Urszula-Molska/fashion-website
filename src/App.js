import { lazy, Suspense } from "react";
//import logo from "./logo.svg";

const Navigation = lazy(() => import("./components/Navigation.jsx"));

const Hero = lazy(() => import("./components/Hero.jsx"));
const BestSelling = lazy(() => import("./components/BestSelling.jsx"));

function App() {
  return (
    <>
      <div className="bg-bg_green200">
        <div className="flex flex-col justify-center w-full pr-[175px] pl-[174px]">
          <Navigation />
          <Hero />
        </div>
      </div>

      <BestSelling />
    </>
  );
}

export default App;
