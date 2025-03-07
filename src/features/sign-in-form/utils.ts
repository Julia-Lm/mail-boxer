import { validateField } from "shared/utils/validate-field.ts";
import { AuthLoginData } from "app/store/auth/auth.type.ts";

export const validateForm = (formValues: AuthLoginData) => {
  return {
    username: validateField(formValues.username, "Login", 1, 150),
    password: validateField(formValues.password, "Password", 1, 128),
  };
};
