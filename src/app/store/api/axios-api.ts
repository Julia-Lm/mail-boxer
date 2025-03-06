import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { authStoreName, backEndURL } from "../../../config.ts";
import { AuthLoginData } from "app/store/auth/auth.type.ts";
import isEqual from "lodash/isEqual";

export class AxiosApi {
  private axios: AxiosInstance;
  private loginAuthData: AuthLoginData | null;

  constructor() {
    this.axios = this.getAxiosInstance();
    this.loginAuthData = this.getLoginAuthData();
  }

  reset() {
    this.loginAuthData = null;
    this.axios = this.getAxiosInstance();
  }

  private updateLoginAuthProperties(): void {
    const storageAuthData = this.getLoginAuthData();

    if (this.loginAuthData === null || !isEqual(this.loginAuthData, storageAuthData)) {
      this.loginAuthData = storageAuthData;
    }

    const tokenHeaderValue = this.axios.defaults.headers["Authorization"];

    if (tokenHeaderValue === undefined) {
      this.updateAxiosInstance(this.loginAuthData);
    }
  }

  private updateAxiosInstance(authLoginData?: AuthLoginData | null) {
    this.axios = this.getAxiosInstance(authLoginData || undefined);
  }

  private getLoginAuthData() {
    const storedData = localStorage.getItem(authStoreName);

    if (!storedData) return null;

    return JSON.parse(storedData) as AuthLoginData;
  }

  private getAxiosInstance(authLoginData?: AuthLoginData): AxiosInstance {
    const username = authLoginData?.username;
    const password = authLoginData?.password;

    const authHeader =
      username && password ? { Authorization: "Basic " + btoa(`${username}:${password}`) } : {};

    return axios.create({
      baseURL: backEndURL,
      headers: authHeader,
    });
  }

  async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any> & { message?: string }> {
    try {
      this.updateLoginAuthProperties();

      return await this.axios.post(url, data, config);
    } catch (e: any) {
      console.warn(e);
      return { message: e?.message, ...e?.response, isError: true };
    }
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T, any> & { message?: string }> {
    try {
      this.updateLoginAuthProperties();

      return await this.axios.get(url, config);
    } catch (e: any) {
      console.warn(e);
      return { message: e?.message, ...e?.response, isError: true };
    }
  }
}
