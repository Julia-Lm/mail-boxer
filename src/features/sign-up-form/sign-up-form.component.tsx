import { SignUpFormProp } from "./sign-up-form.type.ts";
import { Button, TextField } from "@mui/material";
import { AuthData } from "app/store/auth/auth.type.ts";
import { useFormik } from "formik";
import * as S from "./sign-up-form.styles";
import { ChangeEvent, useState } from "react";
import { checkEmailField } from "./utils.ts";

export const SignUpForm = ({ onCreateUser }: SignUpFormProp) => {
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = useFormik<AuthData>({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    onSubmit: async (values) => {
      setError("");
      const resp = await onCreateUser(values);

      if (!resp.isSuccess && resp.message) setError(resp.message);
    },
    validate: (formValues) => {
      const { username, password, email } = formValues;
      const emailIsValid = checkEmailField(email);

      return {
        ...(username ? {} : { username: "Please enter login" }),
        ...(password ? {} : { password: "Please enter password" }),
        ...(emailIsValid ? {} : { email: "Please enter email" }),
      };
    },
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setError("");
    handleChange(e);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormFields>
        <S.FormGroup>
          <S.FormLabel>Login</S.FormLabel>
          <TextField
            name="username"
            variant="outlined"
            size="small"
            type="text"
            value={values.username}
            onChange={handleChangeInput}
            error={touched.username && Boolean(errors.username)}
            placeholder="Enter login"
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>Email</S.FormLabel>
          <TextField
            name="email"
            variant="outlined"
            size="small"
            type="email"
            value={values.email}
            onChange={handleChangeInput}
            error={touched.email && Boolean(errors.email)}
            placeholder="Enter email"
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>Password</S.FormLabel>
          <TextField
            name="password"
            variant="outlined"
            size="small"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChangeInput}
            error={touched.password && Boolean(errors.password)}
          />
        </S.FormGroup>
        <S.ErrorMessage $isHidden={!error}>{error}</S.ErrorMessage>
      </S.FormFields>

      <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
        Sign Up
      </Button>
    </S.Form>
  );
};
