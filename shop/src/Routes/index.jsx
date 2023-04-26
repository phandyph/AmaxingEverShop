import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Routes.css";
import React from "react";
const HomePage = React.lazy(() => import("../Pages/HomePage"));
const MenPage = React.lazy(() => import("../Pages/MenPage"));
const KidsPage = React.lazy(() => import("../Pages/KidsPage"));
const WomenPage = React.lazy(() => import("../Pages/WomenPage"));
const StorePage = React.lazy(() => import("../Pages/StorePage"));
const LoginPage = React.lazy(() => import("../Pages/LoginPage"));

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
