import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Feed from "../pages/Feed";
import UserProfile from "../pages/UserProfile";
import PostsList from "../components/PostsList/PostsList";
import UserAlbumPictures from "../components/UserInfo/UserAlbums/UserAlbumPictures";
import UserPosts from "../components/UserInfo/UserPosts/UserPosts";
import UserTodos from "../components/UserInfo/UserTodos/UserTodos";
import UserAlbumsList from "../components/UserInfo/UserAlbums/UserAlbumsList";
import UserAlbums from "../pages/UserAlbums";
import Login from "../pages/Login";


export const router = createBrowserRouter([

    {path:'login',element:<Login/>},
    {path:'home',element:<App/>,children:[
        
        {path:'feed',element:<Feed/>, children:[
            {path:':type', element:<PostsList/>}
        ]},
        {path:'users/:id',element:<UserProfile/>, children:[
            {path:'albums',element:<UserAlbums/>,children:[
                {path:'', element:<UserAlbumsList/>},
                {path:':albumId', element:<UserAlbumPictures/>}
            ]},
            {path:'posts', element:<UserPosts/>},
            {path:'todos', element:<UserTodos/>},
        ]},

    ]}
]);