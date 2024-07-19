import { ReactNode } from "@tanstack/react-router";

interface mainModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  size?: "sm" | "md" | "lg";
  body: ReactNode;
}

export type { mainModalProps };
