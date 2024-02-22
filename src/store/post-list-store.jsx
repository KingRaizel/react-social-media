import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList ];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userID, title, body, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions,
        userID,
        tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Zealand",
    body: "I am going to Zealand with my family and friends.  We are planning to visit the beaches of Zealand.",
    reactions: 2,
    userID: "user-11",
    tags: ["Foreign Trip", "vacation"],
  },
  {
    id: "2",
    title: "Going to Graduate",
    body: "Yes , I am going to graduate this year.  It is a great time for me.",
    reactions: 10,
    userID: "user-29",
    tags: ["Gradaution", "unemployment"],
  },
];

export default PostListProvider;
