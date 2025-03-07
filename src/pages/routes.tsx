import { Route, Routes, useNavigate } from "react-router-dom";
import { ROUTES } from "app/routes/routes.constant.ts";
import { EmailHome } from "pages/email-home";
import { useEffect } from "react";
import { Layout } from "widgets/index";

export const HomeRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(ROUTES.emails.url);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path={ROUTES.emails.url} element={<EmailHome />} />
      </Routes>
    </Layout>
  );
};
