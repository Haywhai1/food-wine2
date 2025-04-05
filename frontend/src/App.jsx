import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/homelayout";
import Hero from "./pages/homelayout/hero";
function App() {
  return(
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
         <Route index element={<Hero/>} />
      </Route>
    </Routes>
  );
}

export default App
