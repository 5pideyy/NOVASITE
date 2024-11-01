import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { MainNavbar } from "./components/navbar/MainNavbar.jsx";
import Root from "./pages/home/Root";//
import Event from "./pages/events/Accomplishments";//
import Blogs from "./pages/blogs/Blogs";//
import Membership from "./pages/about/BecomeMember";//
import Footer from "./components/footer/Footer";
import "./App.css";

export const paths = {
  root: "/",
  events: "/accomplishments",
  blogs: "/blogs",
  membership: "/membership",
}

const router = createHashRouter([
  {
    path: paths.root,
    element: <Root />,
  },
  {
    path: "/accomplishments",
    element: <Event />,
    children: [

    ],
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/membership",
    element: <Membership />,
  },
]);

function App() {
  return (
    <>
      <MainNavbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
