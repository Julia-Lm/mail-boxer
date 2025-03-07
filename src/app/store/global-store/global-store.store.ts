import { AuthStore } from "app/store/auth/auth.store.ts";
import { makeAutoObservable } from "mobx";
import { EmailsStore } from "app/store/emails/emails.store.ts";
import { AxiosApi } from "app/store/api/axios-api.ts";

class GlobalStore {
  private readonly AxiosApi: AxiosApi;
  public readonly AuthHub: AuthStore;
  public readonly EmailsHub: EmailsStore;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.AxiosApi = new AxiosApi();

    this.AuthHub = new AuthStore(this.AxiosApi);
    this.EmailsHub = new EmailsStore(this.AxiosApi);
  }

  logout() {
    this.AuthHub.clearStore();
    this.EmailsHub.clearStore();
    this.AxiosApi.reset();
  }
}

export const GlobalHub = new GlobalStore();
