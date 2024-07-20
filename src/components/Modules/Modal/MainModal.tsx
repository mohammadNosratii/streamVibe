import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import { mainModalProps } from "../../../interfaces/modal.interface";

export default function MainModal({ isOpen, onOpenChange, size = "md", body }: mainModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      backdrop="blur"
      size={size}
      scrollBehavior={"inside"}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <ModalBody className="py-4">{body}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
