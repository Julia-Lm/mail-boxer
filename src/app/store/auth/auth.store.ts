import { makeAutoObservable } from "mobx";
import { authStoreName, backEndURL } from "../../../config.ts";
import { AxiosApi } from "app/store/api/axios-api.ts";
import axios from "axios";
import { AuthData, AuthLoginData, AuthRespData, UserData } from "app/store/auth/auth.type.ts";
import isEqual from "lodash/isEqual";

// const mockUser = {
//   username: "user1993", //yuliiaLm1993
//   password: "password",
//   email: "user1@gmail.com", //yuliiaLm1993
// };

export class AuthStore {
  public isAuth: boolean;
  public isUserInfoReady: boolean;
  private userData: UserData | null;
  private loginAuthData: AuthLoginData | null;

  private readonly AxiosApi: AxiosApi;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.AxiosApi = new AxiosApi();
    this.loginAuthData = this.getLoginAuthData();

    this.isAuth = Boolean(this.loginAuthData?.password && this.loginAuthData?.username);

    this.userData = null;
    this.isUserInfoReady = false;
  }

  get user() {
    if (!this.isUserDataReady && this.userData === null) {
      this.getUserInfo();
      return null;
    }

    return this.userData;
  }

  get isUserDataReady(): boolean {
    if (this.userData === null) {
      this.getUserInfo();
    }

    return Boolean(this.isUserInfoReady);
  }

  setUserData(userData: UserData) {
    this.userData = userData;
  }

  private async initUserData() {
    await this.getUserInfo();

    this.setAuth(true);
  }

  async createUser(param: AuthData): Promise<AuthRespData> {
    try {
      const { data } = await this.createUserRequest(param);

      if (data) this.setLoginAuthData({ username: param.username, password: param.password });

      await this.initUserData();

      return { isSuccess: true, message: "User is created successfully." };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage =
          error.response.data?.username?.[0] ||
          error.response.data?.email?.[0] ||
          error.response.data?.password?.[0];
        if (errorMessage) {
          return { isSuccess: false, message: errorMessage };
        }
      }

      console.error("Error fetching products:", error);
      return { isSuccess: false, message: "An error occurred while creating the user." };
    }
  }

  async login(param?: AuthLoginData): Promise<AuthRespData> {
    try {
      const storageAuthData = this.getLoginAuthData();

      if (!isEqual(param, storageAuthData)) {
        return { message: "Invalid credentials", isSuccess: false };
      }

      await this.initUserData();

      return { isSuccess: true, message: "" };
    } catch (error) {
      console.error("Error fetching products:", error);
      return { message: "Invalid credentials", isSuccess: false };
    }
  }

  logout() {
    this.clearStore();
  }

  async getUserInfo() {
    try {
      const { data } = await this.getUserInfoRequest();

      console.log(data);
      if (data) {
        this.setUserData(data);
        this.isUserInfoReady = true;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  private setAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  private setLoginAuthData(params: AuthLoginData) {
    localStorage.setItem(authStoreName, JSON.stringify(params));
  }

  private getLoginAuthData() {
    const storedData = localStorage.getItem(authStoreName);

    if (!storedData) return null;

    return JSON.parse(storedData) as AuthLoginData;
  }

  private async getUserInfoRequest() {
    const url = "/users/current/";

    return this.AxiosApi.get<UserData>(url);
  }

  private async createUserRequest(newUser: AuthData) {
    const url = backEndURL + "/users/";
    return await axios.post<any>(url, newUser);
  }

  private clearStore() {
    localStorage.removeItem(authStoreName);
    this.setAuth(false);
    this.isUserInfoReady = false;
    this.userData = null;
    this.loginAuthData = null;
    this.AxiosApi.reset();
  }
}

export const AuthHub = new AuthStore();
