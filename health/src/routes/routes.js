import { Routes, Route } from "react-router-dom";
import NewsData from "./home/top/newsdata";
import EnquiryAndNotice from "./home/bottom/enquiryAndnotice";
import Gym from "./gym/gym";
import Signin from "./sign/signin";
import Signup from "./sign/signup";

function PageRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NewsData></NewsData>
            <EnquiryAndNotice></EnquiryAndNotice>
          </>
        }
      ></Route>
      <Route path="/gym" element={<Gym></Gym>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/signin" element={<Signin></Signin>}></Route>
    </Routes>
  );
}

export default PageRoutes;
