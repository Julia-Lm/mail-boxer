import { makeAutoObservable } from "mobx";
import { AxiosApi } from "app/store/api/axios-api.ts";
import { Email, EmailRespData, EmailsRespData, SendEmailParam } from "app/store/emails/emails.type.ts";

export class EmailsStore {
  private readonly AxiosApi: AxiosApi;
  private requestPostfix: string;

  private emailsData: Email[] | null;
  public count: number | null;
  public next: string | null;
  public previous: string | null;
  public isLoading: boolean;
  public isEmailDataReady: boolean;

  public currentPage: number;
  public rowsPerPage: number;

  constructor(AxiosApis: AxiosApi) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.AxiosApi = AxiosApis;
    this.requestPostfix = "/emails/";

    this.emailsData = null;
    this.isLoading = false;
    this.isEmailDataReady = false;

    this.count = null;
    this.next = null;
    this.previous = null;

    this.currentPage = 0;
    this.rowsPerPage = 5;
  }

  get emails() {
    if (this.emailsData === null && !this.isLoading && !this.isEmailDataReady) {
      this.getEmails();
      return [];
    }
    return this.emailsData;
  }

  setPage(newPage: number) {
    this.currentPage = newPage;
    this.getEmails();
  }

  setRowsPerPage(newRowsPerPage: number) {
    this.rowsPerPage = newRowsPerPage;
    this.currentPage = 0;
    this.getEmails();
  }

  async sendEmail(params: SendEmailParam): Promise<EmailsRespData> {
    try {
      const { data } = await this.sendEmailRequest(params);

      if (data) this.doLoadEmails();

      return { isSuccess: true, message: "Email is send successfully." };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { isSuccess: false, message: error };
    }
  }

  async doLoadEmails() {
    await this.getEmails();
  }

  private async getEmails() {
    try {
      this.isLoading = true;
      const { data } = await this.getEmailsRequest();

      if (data) {
        this.setStoreData(data);
        this.isEmailDataReady = true;
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error("Error fetching products:", error);
    }
  }

  private setStoreData(data: EmailRespData<Email[]>) {
    const { results, count, next, previous } = data;

    this.emailsData = results;
    this.count = count;
    this.next = next;
    this.previous = previous;
  }

  private async getEmailsRequest() {
    const offset = this.currentPage * this.rowsPerPage;
    const url = `${this.requestPostfix}?limit=${this.rowsPerPage}&offset=${offset}`;

    return this.AxiosApi.get<EmailRespData<Email[]>>(url, {
      headers: { "Content-Type": "application/json" },
    });
  }

  private async sendEmailRequest(params: SendEmailParam) {
    const url = this.requestPostfix;

    return this.AxiosApi.post<Email>(url, params);
  }

  clearStore() {
    this.isEmailDataReady = false;
    this.emailsData = null;
    this.isLoading = false;

    this.count = null;
    this.next = null;
    this.previous = null;

    this.currentPage = 0;
    this.rowsPerPage = 5;
  }
}
