import { SendEmailFormParam } from "app/store/emails/emails.type.ts";
import { validateField } from "shared/utils/validate-field.ts";

export const validateForm = (formValues: SendEmailFormParam) => {
  return {
    subject: validateField(formValues.subject, "Title", 1, 255),
    message: validateField(formValues.message, "Message", 1, 5000),
  };
};
