import { Button, ToolbarContainer } from "@/components/base";
import { useRouter } from "next/router";
import React from "react";
import { FaPlus } from "react-icons/fa";

export const Toolbar = () => {
  const { push } = useRouter();
  return (
    <ToolbarContainer position="right">
      <Button variant="success" onClick={() => push("/post/create")}>
        <FaPlus />
        Create
      </Button>
    </ToolbarContainer>
  );
};
