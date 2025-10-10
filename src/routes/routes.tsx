import { createBrowserRouter, Navigate } from "react-router";
import Login from "@/pages/login";
import ContentLayout from "@/layouts/content-layout";
import Home from "@/pages/home";
import AuthLayout from "@/layouts/auth-layout";
import Register from "@/pages/register";
import { PATHS } from "./paths";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentLayout />,
        children: [
            {
                path: "/",
                index: true,
                element: <Navigate to={PATHS.home} />,
            },
            {
                path: PATHS.home,
                element: <Home />,
            },
        ],
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: PATHS.auth.index,
                index: true,
                element: <Navigate to={PATHS.auth.login} />,
            },
            {
                path: PATHS.auth.login,
                element: <Login />,
            },
            {
                path: PATHS.auth.register,
                element: <Register />,
            },
        ],
    },
]);
