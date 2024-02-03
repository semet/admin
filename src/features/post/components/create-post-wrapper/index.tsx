import { Card } from "@/components/base";
import React, { FC } from "react";
import { CreatePostForm } from "@/features/post";

export const CreatePostWrapper: FC = () => {
  return (
    <div className="mx-auto w-full">
      {/* table */}
      <Card title="Create post">
        <CreatePostForm />
      </Card>
    </div>
  );
};
