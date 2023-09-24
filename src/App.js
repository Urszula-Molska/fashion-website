import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.jsx";
//import logo from "./logo.svg";

const Navigation = lazy(() => import("./components/Navigation.jsx"));

const Hero = lazy(() => import("./components/Hero.jsx"));
const BestSelling = lazy(() => import("./components/BestSelling.jsx"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="bg-bg_green200">
          <div className="flex flex-col justify-center 2xl:items-center tab:items-center w-full px-[10px] tab:px-6 2xl:pr-[175px] 2xl:pl-[174px]">
            <Navigation />
            <Hero />
          </div>
        </div>
        <div className="flex justify-center items-center w-full px-[10px] 2xl:pr-[175px] 2xl:pl-[174px]">
          <BestSelling />
        </div>
      </Suspense>
    </>
  );
}

export default App;
