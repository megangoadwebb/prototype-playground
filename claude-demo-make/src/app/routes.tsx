import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ScreenPage } from "./pages/ScreenPage";
import { Screen1, Screen2, Screen3, Screen4, Screen5, Screen6 } from "./components/screens";

export const router = createBrowserRouter(
  [
  { path: "/", Component: Home },
  { path: "/pay", element: <ScreenPage label="1 · Choose Amount"><Screen1 /></ScreenPage> },
  { path: "/source", element: <ScreenPage label="2 · Pay From"><Screen2 /></ScreenPage> },
  { path: "/review", element: <ScreenPage label="3 · Review & Pay"><Screen3 /></ScreenPage> },
  { path: "/authenticate", element: <ScreenPage label="4 · Face ID"><Screen4 /></ScreenPage> },
  { path: "/processing", element: <ScreenPage label="5 · Processing"><Screen5 /></ScreenPage> },
  { path: "/success", element: <ScreenPage label="6 · Success"><Screen6 /></ScreenPage> },
  { path: "*", element: <Home /> },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" }
);
