import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Error from "../layout/ErrorPage";
import Home from "../components/Home";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout/>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default router;