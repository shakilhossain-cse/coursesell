import React, { Suspense, lazy } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
// import RequireAuth from "./RequireAuth";

const Home = lazy(() => import("../views/pages/Home"));
// const Login = lazy(()=> import("../pages/Login/Login"))
// const Register = lazy(() => import("../pages/Register/Register"));
// const Causes = lazy(() => import("../pages/Causes/Causes"));
// const About = lazy(() => import("../pages/About/About"));
// const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AllRoutes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default AllRoutes;