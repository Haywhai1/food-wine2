import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/homelayout";
import Home from "./pages/homelayout/home";
import RestaurantLayout from "./pages/restaurantLayout";
import Restaurant from "./pages/restaurantLayout/restaurant";
import BarLayout from "./pages/barLayout";
import Bar from "./pages/barLayout/bar";
function App() {
  return(
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
         <Route index element={<Home/>} />
      </Route>

      <Route path="/restaurant" element={<RestaurantLayout/>}>
         <Route index element={<Restaurant/>} />
      </Route>

      <Route path="/bar" element={<BarLayout/>}>
         <Route index element={<Bar/>} />
      </Route>
    </Routes>
  );
}

export default App
