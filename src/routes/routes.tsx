import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed";
import UserProfile from "../pages/UserProfile";
import PostsList from "../components/Comments/PostsList";

export const router = createBrowserRouter([

    {path:'',element:<App/>,children:[
        {path:'feed',element:<Feed/>, children:[
            {path:':type', element:<PostsList/>}
        ]},
        {path:'users/:id',element:<UserProfile/>},

    ]}
]);