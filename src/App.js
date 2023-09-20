import { lazy, Suspense } from "react";
//import logo from "./logo.svg";

const Navigation = lazy(() => import("./components//Navigation.jsx"));

function App() {
  return (
    <div>
      <Navigation />
      <p className="font-roboto_slab font-bold text-[50px] text-green200">
        hejka
      </p>
    </div>
  );
}

export default App;
