import React, { FC } from "react";
import { PostProvider, PostTable, Toolbar, UpdatePost } from "@/features/post";
import { Card } from "@/components/base";

export const PostWrapper: FC = () => {
  return (
    <PostProvider>
      <div className="mx-auto w-full">
        {/* toolbar */}
        <Toolbar />
        {/* table */}
        <Card title="Post">
          <PostTable />
        </Card>
      </div>
    </PostProvider>
  );
};
