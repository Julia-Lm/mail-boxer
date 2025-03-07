import { SignUpFormProp } from "./sign-up-form.type.ts";
import { Button } from "@mui/material";
import { AuthData } from "app/store/auth/auth.type.ts";
import { useFormik } from "formik";
import * as S from "./sign-up-form.styles";
import { ChangeEvent, useState } from "react";
import { validateForm } from "./utils.ts";

export const SignUpForm = ({ onCreateUser, onBack }: SignUpFormProp) => {
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

      if (resp.isSuccess) onBack();

      if (!resp.isSuccess && resp.message) setError(resp.message);
    },
    validate: (formValues) => {
      const { username, password, email } = validateForm(formValues);

      return {
        ...(username.isValid ? {} : { username: username.message }),
        ...(password.isValid ? {} : { password: password.message }),
        ...(email.isValid ? {} : { email: email.message }),
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
          <S.Input
            name="username"
            variant="outlined"
            size="small"
            type="text"
            value={values.username}
            onChange={handleChangeInput}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            placeholder="Enter login"
            $isMessage={Boolean(touched.username && Boolean(errors.username))}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>Email</S.FormLabel>
          <S.Input
            name="email"
            variant="outlined"
            size="small"
            type="email"
            value={values.email}
            onChange={handleChangeInput}
            error={touched.email && Boolean(errors.email)}
            placeholder="Enter email"
            helperText={touched.email && errors.email}
            $isMessage={Boolean(touched.email && Boolean(errors.email))}
          />
        </S.FormGroup>

        <S.FormGroup>
          <S.FormLabel>Password</S.FormLabel>
          <S.Input
            name="password"
            variant="outlined"
            size="small"
            type="password"
            placeholder="Enter password"
            value={values.password}
            onChange={handleChangeInput}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            $isMessage={Boolean(touched.password && Boolean(errors.password))}
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
