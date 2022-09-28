import { useRoutes } from "react-router-dom";
import Layout from "./layouts";
import Entry from "./pages/Entry";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Raffle from "./pages/Raffle";
import Setting from "./pages/Setting";
import Collab from "./pages/Collab";
import Detail from "./pages/Collab/Detail";

export default function Router () {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/project", element: <Project /> },
                { path: "/entry", element: <Entry /> },
                { path: "/raffle", element: <Raffle /> },
                { path: "/setting", element: <Setting />},
                { path: "/collab", element: <Collab />},
                { path: "/collab/detail", element: <Detail />}
            ]
        }
    ])
}
// import 