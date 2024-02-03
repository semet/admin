import { TDrawer } from "@/types";
import { Post } from "@prisma/client";

export type TPostContext = TDrawer & {
  selectedPost: Post | null;
  setSelectedPost: (category: Post | null) => void;
};

export type TProps = {
  children: React.ReactNode;
};
