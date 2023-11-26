import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed";
import UserProfile from "../pages/UserProfile";
import PostsList from "../components/PostsList/PostsList";
import UserAlbumPictures from "../components/UserInfo/UserAlbums/UserAlbumPictures";
import UserMainMenu from "../components/UserInfo/UserAlbums/UserMainMenu";
import UserPosts from "../components/UserInfo/UserPosts/UserPosts";
import UserTodos from "../components/UserInfo/UserTodos/UserTodos";

export const router = createBrowserRouter([

    {path:'',element:<App/>,children:[
        {path:'feed',element:<Feed/>, children:[
            {path:':type', element:<PostsList/>}
        ]},
        {path:'users/:id',element:<UserProfile/>, children:[
            {path:'albums', element:<UserMainMenu/>,children:[
                {path:':id', element:<UserAlbumPictures/>}
            ]},
            {path:'posts', element:<UserPosts/>},
            {path:'todos', element:<UserTodos/>},
        ]},

    ]}
]);