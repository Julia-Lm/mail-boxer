import { ModalProps } from "shared/ui-elements/modal/modal.type.ts";
import { Modal as MUIModal } from "@mui/material";
import * as S from "./modal.styles";

export const Modal = ({ open, onClose, children, title, ...prop }: ModalProps) => {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      {...prop}
    >
      <S.Container>
        <S.Title>{title}</S.Title>
        {children}
      </S.Container>
    </MUIModal>
  );
};
