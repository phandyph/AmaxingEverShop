import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MenPage from "../Pages/MenPage";
import KidsPage from "../Pages/KidsPage";
import WomenPage from "../Pages/WomenPage";
import StorePage from "../Pages/StorePage";
import LoginPage from "../Pages/LoginPage";
import "./Routes.css";

const allPages = [
  { path: "/", component: <HomePage /> },
  { path: "/men", component: <MenPage /> },
  { path: "/kids", component: <KidsPage /> },
  { path: "/women", component: <WomenPage /> },
  { path: "/store", component: <StorePage /> },
  { path: "/login", component: <LoginPage /> },
];

const MyRoutes = () => {
  return (
    <div className="content">
      <div className="myRoutes">
        <Router>
          <Routes>
            {allPages.map((page) => {
              return <Route path={page.path} element={page.component} />;
            })}
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default MyRoutes;
