import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
import ScrollToTop from "./components/ScrollToTop";
import MouseGlow from "./components/MouseGlow/MouseGlow";

function App() {
  return (
    <>
      <div className="cont dark-theme overflow-hidden">
        <MouseGlow />
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
