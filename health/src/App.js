import "./App.css";
import PageRoutes from "./routes/routes";
import HomeNavbar from "./routes/home/top/homeNavbar";

function App() {
  return (
    <div className="App">
      <HomeNavbar></HomeNavbar>
      <PageRoutes></PageRoutes>
    </div>
  );
}

export default App;
