import { Email } from "app/store/emails/emails.type.ts";

export interface EmailTableProps {
  emails: Email[];
  isLoading: boolean;
}
