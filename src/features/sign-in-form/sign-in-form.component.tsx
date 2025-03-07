import { SignInFormProp } from "features/sign-in-form/sign-in-form.type.ts";
import { Button } from "@mui/material";
import { AuthLoginData } from "app/store/auth/auth.type.ts";
import { useFormik } from "formik";
import * as S from "./sign-in-form.styles";
import { ChangeEvent, useState } from "react";
import { validateForm } from "./utils.ts";

export const SignInForm = ({ onLogin }: SignInFormProp) => {
  const [error, setError] = useState("");

  const { handleSubmit, handleChange, values, errors, touched, isSubmitting } = useFormik<AuthLoginData>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      setError("");
      const resp = await onLogin(values);
      console.log("resp", resp);

      if (!resp.isSuccess && resp.message) setError(resp.message);
    },
    validate: (formValues) => {
      const { username, password } = validateForm(formValues);

      return {
        ...(username.isValid ? {} : { username: username.message }),
        ...(password.isValid ? {} : { password: password.message }),
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
            $isMessage={Boolean(touched.username && Boolean(errors.username))}
            placeholder="Enter login"
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
        Log In
      </Button>
    </S.Form>
  );
};
