import { SendEmailFormParam } from "app/store/emails/emails.type.ts";

export interface SendEmailFormProp {
  onSendEmail: (formValues: SendEmailFormParam) => Promise<void>;
  onClose: () => void;
}
