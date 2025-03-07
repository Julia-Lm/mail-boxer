import * as S from "./header.styles.ts";
import { Container } from "shared/ui-elements";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { GlobalHub } from "app/store/global-store/global-store.store.ts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "app/routes/routes.constant.ts";

export const Header = observer(() => {
  const { logout } = GlobalHub;
  const navigate = useNavigate();

  const onLogout = () => {
    navigate(ROUTES.basePath);
    logout();
  };

  return (
    <S.HeaderContainer>
      <Container>
        <S.Wrapper>
          <Button type="button" variant="outlined" color="primary" onClick={onLogout}>
            Log Out
          </Button>
        </S.Wrapper>
      </Container>
    </S.HeaderContainer>
  );
});
