import { immer } from "zustand/middleware/immer";
import { PostItem } from "../models/PostItem";
import { devtools } from "zustand/middleware";
import { create } from "zustand";

interface PostsStore {
  posts: PostItem[];
  selectedPost: PostItem;
  setPosts: (newPosts: PostItem[]) => void;
  addPost: (post: PostItem) => void;
  openPostComments: (postId: number) => void;
  //editPost:(userId:number,editedPost:PostItem)=>void;
}

const store = immer((set: any) => ({
  posts: [] as PostItem[],
  selectedPost: {} as PostItem,
  setPosts: (newPosts: PostItem[]) => {
    set(
      (state: any) => {
        state.posts = newPosts;
      },
      false,
      "setPosts"
    );
  },

  addPost: (post: PostItem) => {
    set((state: any) => state.posts.push(post), false, "addPost");
  },

  openPostComments: (postId: number) => {
    set(
      (state: any) => {
        if (postId === -1) {
          state.selectedPost = {};
          return;
        }
        state.selectedPost = state.posts.find((p: PostItem) => p.id === postId);
      },
      false,
      "openPostComments"
    );
  },
}));

export const usePostsStore = create<PostsStore>()(
  devtools(store, { name: "postsStore" })
);
