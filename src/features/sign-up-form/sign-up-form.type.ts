import { AuthData, AuthRespData } from "app/store/auth/auth.type.ts";

export interface SignUpFormProp {
  onCreateUser: (param: AuthData) => Promise<AuthRespData>;
}
