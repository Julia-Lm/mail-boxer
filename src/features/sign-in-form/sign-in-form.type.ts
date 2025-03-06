import { AuthLoginData, AuthRespData } from "app/store/auth/auth.type.ts";

export interface SignInFormProp {
  onLogin: (param: AuthLoginData) => Promise<AuthRespData>;
}
