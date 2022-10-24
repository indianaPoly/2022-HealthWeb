import "./App.css";
import { useEffect } from "react";
import PageRoutes from "./routes/routes";
import HomeNavbar from "./routes/home/top/homeNavbar";

function App() {
  useEffect(() => {
    let workList = localStorage.getItem("workList");
    if (workList.length == 0) {
      localStorage.setItem("workList", JSON.stringify([]));
    } else {
    }
  }, []);

  return (
    <div className="App">
      <HomeNavbar></HomeNavbar>
      <PageRoutes></PageRoutes>
    </div>
  );
}

export default App;
