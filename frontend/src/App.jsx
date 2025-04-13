import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/homelayout";
import Home from "./pages/homelayout/home";
function App() {
  return(
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
         <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App
