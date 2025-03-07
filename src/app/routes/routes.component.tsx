import { Route, Routes } from "react-router-dom";
import { ROUTES } from "app/routes/routes.constant.ts";
import * as S from "./routes.styles.ts";
import { AuthPage } from "pages/auth-page";
import { observer } from "mobx-react-lite";
import ProtectedRoute from "app/routes/route-protected.tsx";
import { Loader } from "entities/loader";
import { HomeRoutes } from "pages/routes.tsx";
import { GlobalHub } from "app/store/global-store/global-store.store.ts";

export const RoutesComponent = observer(() => {
  const { isAuth, isUserDataReady } = GlobalHub.AuthHub;

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
            <ProtectedRoute hasAccess={isUserDataReady} redirectPath={ROUTES.basePath}>
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
