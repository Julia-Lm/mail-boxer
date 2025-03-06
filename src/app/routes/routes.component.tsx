import { Route, Routes } from "react-router-dom";
import { ROUTES } from "app/routes/routes.constant.ts";
import * as S from "./routes.styles.ts";
import { AuthPage } from "pages/auth-page";
import { AuthHub } from "app/store/auth/auth.store.ts";
import { observer } from "mobx-react-lite";
import ProtectedRoute from "app/routes/route-protected.tsx";
import { Loader } from "entities/loader";
import { HomeRoutes } from "pages/routes.tsx";

export const RoutesComponent = observer(() => {
  const { isAuth, isUserDataReady } = AuthHub;

  if (!isAuth) {
    return (
      <S.Wrapper>
        <AuthPage />
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <Routes>
        <Route
          element={
            <ProtectedRoute hasAccess={isUserDataReady} redirectPath={`${ROUTES.basePath}*`}>
              <Loader />
            </ProtectedRoute>
          }
        >
          <Route path={`${ROUTES.basePath}*`} element={<HomeRoutes />} />
        </Route>
      </Routes>
    </S.Wrapper>
  );
});
