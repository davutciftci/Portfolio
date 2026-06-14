import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const FeedoProject = lazy(() => import("./pages/FeedoProject"));
const FeedoKvkDisclosure = lazy(() => import("./pages/FeedoKvkDisclosure"));
const FeedoPrivacyPolicy = lazy(() => import("./pages/FeedoPrivacyPolicy"));
const ErrorPage = lazy(() => import("./pages/Error"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "projects/feedo",
                element: <FeedoProject />,
            },
            {
                path: "projects/feedo/kvk-disclosure",
                element: <FeedoKvkDisclosure />,
            },
            {
                path: "projects/feedo/privacy-policy",
                element: <FeedoPrivacyPolicy />,
            },
        ],
    },
], {
    future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
    }
});
