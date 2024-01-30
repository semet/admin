export type TProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  title: string;
  width?: number;
  position?: "left" | "right";
};
