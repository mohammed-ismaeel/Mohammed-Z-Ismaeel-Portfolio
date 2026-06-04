import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
import ScrollToTop from "./components/ScrollToTop";
import MouseGlow from "./components/MouseGlow/MouseGlow";
import { useEffect, useState } from "react";

function App() {
  const [showMouseGlow, setShowMouseGlow] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine) and (min-width: 769px)"
    );

    const updateGlowState = () => {
      setShowMouseGlow(mediaQuery.matches);
    };

    updateGlowState();
    mediaQuery.addEventListener("change", updateGlowState);

    return () => mediaQuery.removeEventListener("change", updateGlowState);
  }, []);

  return (
    <>
      <div className="cont dark-theme overflow-hidden">
        {showMouseGlow && <MouseGlow />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Details/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import HomePage from './Pages/HomePage'
// import Details from './Pages/Details'
// // import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Details/:id" element={<Details />}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App
