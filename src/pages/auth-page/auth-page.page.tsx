import { AuthHub } from "app/store/auth/auth.store.ts";
import { useEffect, useState } from "react";
import { ErrorBoundaryComponent } from "app/providers/global-providers/error-boundary.tsx";
import { StepName } from "pages/auth-page/auth-page.type.ts";
import { AuthData, AuthLoginData } from "app/store/auth/auth.type.ts";
import { SignInForm } from "features/sign-in-form";
import * as S from "./auth-page.styles";
import { SignUpForm } from "features/sign-up-form";
import { observer } from "mobx-react-lite";

export const AuthPage = observer(() => {
  const { isAuth, createUser, login } = AuthHub;
  const [steps, setSteps] = useState(StepName.singIn);

  useEffect(() => {
    console.log("isAuth", isAuth);
  }, []);

  const onLogin = async (param: AuthLoginData) => {
    return await login(param);
  };

  const onCreateUser = async (param: AuthData) => {
    return await createUser(param);
  };

  const stepContent = {
    [StepName.singIn]: {
      content: <SignInForm onLogin={onLogin} />,
      title: "Sing In",
    },
    [StepName.singUp]: {
      content: <SignUpForm onCreateUser={onCreateUser} />,
      title: "Sing Up",
    },
  };

  const gotoStep = () => {
    setSteps(steps === StepName.singIn ? StepName.singUp : StepName.singIn);
  };
  const btnGoStepName = steps === StepName.singIn ? "Go to Sign Up" : "Back to Sign In";

  return (
    <ErrorBoundaryComponent>
      <S.Wrapper>
        <S.Title>{stepContent[steps].title}</S.Title>

        <S.GoLinkBtn type="button" variant="text" color="primary" onClick={gotoStep}>
          {btnGoStepName}
        </S.GoLinkBtn>

        {stepContent[steps].content}
      </S.Wrapper>
    </ErrorBoundaryComponent>
  );
});
