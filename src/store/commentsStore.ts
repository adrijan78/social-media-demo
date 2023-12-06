import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { Comment } from "./../models/Comment";

interface CommentsStore {
  comments: Comment[];
  setAllPostComments: (comments: Comment[]) => void;
  addComment: (comment: Comment) => void;
}

const store = immer((set: any) => ({
  comments: [] as Comment[],
  setAllPostComments: (newComments: Comment[]) => {
    set(
      (state: any) => {
        state.comments = newComments;
      },
      false,
      "setPostComments"
    );
  },
  addComment: (comment: Comment) => {
    set(
      (state: any) => {
        state.comments = [comment, ...state.comments];
      },
      false,
      "addComment"
    );
  },
}));

export const useCommentsStore = create<CommentsStore>()(devtools(store));
