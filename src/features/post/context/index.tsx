import { FC, createContext, useContext, useState } from "react";
import { TPostContext, TProps } from "./type";
import { Post } from "@prisma/client";

const PostContext = createContext<TPostContext | null>(null);

const PostProvider: FC<TProps> = (props) => {
  const { children } = props;
  const [isOpenDrawerCreate, setIsOpenDrawerCreate] = useState(false);
  const [isOpenDrawerUpdate, setIsOpenDrawerUpdate] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const toggleDrawerCreate = () => {
    setIsOpenDrawerCreate(!isOpenDrawerCreate);
  };

  const toggleDrawerUpdate = () => {
    setIsOpenDrawerUpdate(!isOpenDrawerUpdate);
  };
  const values = {
    isOpenDrawerCreate,
    toggleDrawerCreate,
    isOpenDrawerUpdate,
    toggleDrawerUpdate,
    selectedPost,
    setSelectedPost,
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};

const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};

export { PostProvider, usePostContext };
