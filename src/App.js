import { lazy, Suspense } from "react";
//import logo from "./logo.svg";
import sprite from "./assets/sprite.svg";

const Navigation = lazy(() => import("./components/Navigation.jsx"));

function App() {
  return (
    <div className="flex justify-center w-full bg-bg_green200 pr-[175px] pl-[174px]">
      <div className="mx-auto 2xl:w-[1377px] w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
