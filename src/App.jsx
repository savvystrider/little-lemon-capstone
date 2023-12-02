import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Reservations from "./components/Reservations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/reservations", element: <Reservations /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
