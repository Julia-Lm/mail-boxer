export interface Email {
  id: number;
  sender: number;
  recipient: string;
  subject: string;
  message: string;
}

export interface EmailRespData<T> {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: T;
}

export interface SendEmailParam {
  sender: number;
  recipient: string; //email
  subject: string;
  message: string;
}

export type SendEmailFormParam = Omit<SendEmailParam, "sender" | "recipient">;

export interface EmailsRespData {
  message?: string | unknown;
  isSuccess: boolean;
}
