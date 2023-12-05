import axios, { AxiosError, AxiosResponse } from "axios";
import { TodoItem } from "../models/TodoItem";
import { PostItem } from "../models/PostItem";
import { Comment } from "../models/Comment";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;

    console.log("Error from BE:", data);
  }
);

const responseBody = (response: AxiosResponse) => response?.data;

const requests = {
  get: (url: string, id?: number) =>
    axios
      .get(id ? `${url}/${id}` : url, id ? {} : { params: { _limit: 100 } })
      .then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string, id: number) =>
    axios.delete(`${url}/${id}`).then(responseBody),
};

const Todos = {
  getAllTodos: () => requests.get("todos"),
  getTodoById: (id: number) => requests.get("todos", id),
  getTodosForUser: (userId: number) => requests.get(`user/${userId}/todos`),
  createTodo: (todo: TodoItem) => requests.post("todos", todo),
  editTodo: (todo: TodoItem) => requests.put(`todos/${todo.id}`, todo),
  delete: (id: number) => requests.delete("todos", id),
};

const Posts = {
  getAllPosts: () => requests.get("posts"),
  getAllPhotos: () => requests.get("photos"),
  getPostsByUser: (userId: number) => requests.get(`user/${userId}/todos`),
  getPhotosByUser: (userId: number) => requests.get(`user/${userId}/photos`),
  createPost: (userId: number, post: PostItem) =>
    requests.post(`user/${userId}/posts`, post),
  createPhoto: (userId: number, photo: PostItem) =>
    requests.post(`user/${userId}/photos`, photo),
  deletePhoto: (photoId: number) => requests.delete("photos", photoId),
  deletePost: (postId: number) => requests.delete("posts", postId),
};

const Comments = {
  getPostComments: (postId: number) => requests.get(`posts/${postId}/comments`),
  createPostComment: (comment: Comment) => requests.post(`comments`, comment),
  deleteComment: (commentId: number) => requests.delete(`comments`, commentId),
};

const Albums = {
  getUserAlbums: (userId: number) => requests.get(`users/${userId}/albums`),
};

const http = {
  Todos,
  Posts,
  Comments,
  Albums,
};

export default http;
