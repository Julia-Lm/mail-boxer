import { observer } from "mobx-react-lite";
import { ErrorBoundaryComponent } from "app/providers/global-providers/error-boundary.tsx";
import { UserProfile, EmailTable } from "pages/email-home/ui";
import * as S from "./email-home.styles";
import { Button, TablePagination } from "@mui/material";
import { GlobalHub } from "app/store/global-store/global-store.store.ts";
import { useState } from "react";
import { Modal } from "shared/ui-elements";
import { SendEmailForm } from "features/send-email-form";
import { SendEmailFormParam, SendEmailParam } from "app/store/emails/emails.type.ts";

export const EmailHome = observer(() => {
  const [openModal, setOpenModal] = useState(false);
  const onOpenModal = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);
  const handleClose = (_, reason) => {
    if (reason === "backdropClick") return;
    onCloseModal();
  };

  const {
    AuthHub: { user },
    EmailsHub: { emails, isLoading, sendEmail, currentPage, rowsPerPage, count, setPage, setRowsPerPage },
  } = GlobalHub;

  const onSendEmail = async (formValues: SendEmailFormParam) => {
    if (!user) return;

    const params: SendEmailParam = {
      ...formValues,
      recipient: user.email,
      sender: user.id,
    };

    await sendEmail(params);
    onCloseModal();
  };

  return (
    <ErrorBoundaryComponent>
      <S.Wrapper>
        <S.TopWrapper>
          <UserProfile user={user} />

          <Button type="button" variant="outlined" color="primary" onClick={onOpenModal}>
            Send email
          </Button>
        </S.TopWrapper>

        <div>
          <S.Title>Sent Emails</S.Title>

          <EmailTable emails={emails || []} isLoading={isLoading} />
          <TablePagination
            component="div"
            count={count || 0}
            page={currentPage}
            rowsPerPage={rowsPerPage}
            onPageChange={(_, newPage) => setPage(newPage)}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);
            }}
          />
        </div>
        <Modal open={openModal} onClose={handleClose} title="Send Email">
          <SendEmailForm onSendEmail={onSendEmail} onClose={onCloseModal} />
        </Modal>
      </S.Wrapper>
    </ErrorBoundaryComponent>
  );
});
