export interface AuthData {
  username: string;
  email: string;
  password: string;
}

export type AuthLoginData = Omit<AuthData, "email">;

export interface UserData extends Omit<AuthData, "password"> {
  id: number;
}

export interface AuthRespData {
  message?: string;
  isSuccess: boolean;
}
