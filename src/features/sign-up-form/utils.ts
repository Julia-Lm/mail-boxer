import { validateField } from "shared/utils/validate-field.ts";
import { AuthData } from "app/store/auth/auth.type.ts";

export const checkEmailField = (email?: string, min: number = 6, max: number = 254) => {
  const validation = validateField(email || "", "Email", min, max);
  if (!validation.isValid) return validation;

  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailPattern.test(email!)) {
    return { isValid: false, message: "Invalid email format" };
  }

  return { isValid: true, message: undefined };
};

export const validateForm = (formValues: AuthData) => {
  return {
    username: validateField(formValues.username, "Login", 1, 150),
    password: validateField(formValues.password, "Password", 1, 128),
    email: checkEmailField(formValues.email, 6, 254),
  };
};
