import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Domains from "./components/Domains";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import AdminRegistration from "./components/AdminRegistration";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import AdminVerification from "./components/AdminVerificationPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user === null) {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/domains",
        element: <Domains />,
      },
      {
        path: "/admin",
        element: <AdminRegistration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/emailsent",
        element: <AdminVerification />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
