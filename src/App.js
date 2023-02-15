
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import PastExibitions from "./pages/PastExibitions";
import Paintings from "./pages/Paintings";
import WorkOnPaper from "./pages/WorkOnPaper";
import Bio from "./pages/Bio";
import Exibition22 from "./pages/Exibition22";
import Exibition20 from "./pages/Exibition20";
import Exibition19 from "./pages/Exibition19";
import Exibition18 from "./pages/Exibition18";
import Exibition17 from "./pages/Exibition17";
import NoPage from "./pages/NoPage";

export default function App() {
  const artPieces = require('./pages/art')();
  artPieces.map(img => img.location ="./img/"+img.location );

  return (
    <BrowserRouter basename={window.location.pathname || ''}>
    <div>
      <Header />
      <Routes>
          <Route index element={<Home images={artPieces}/>}/>
          <Route path="/home" element={<Home images={artPieces}/>}/>
          <Route path="/past-exibitions" element={<PastExibitions images={artPieces}/>}/>
          <Route path="/paintings" element={<Paintings images={artPieces}/>} />
          <Route path="/work-on-paper" element={<WorkOnPaper images={artPieces}/>} />
          <Route path="/bio" element={<Bio/>} />
          <Route path="/exibition22" element={<Exibition22 images={artPieces}/>} />
          <Route path="/exibition20" element={<Exibition20 images={artPieces}/>} />
          <Route path="/exibition19" element={<Exibition19 images={artPieces}/>} />
          <Route path="/exibition18" element={<Exibition18 images={artPieces}/>} />
          <Route path="/exibition17" element={<Exibition17 images={artPieces}/>} />
          <Route path="*" element={<NoPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}


