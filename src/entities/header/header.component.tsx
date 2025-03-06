import * as S from "./header.styles.ts";
import { Container } from "shared/ui-elements";
import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import {AuthHub} from "app/store/auth/auth.store.ts";

export const Header = observer(() => {
    const { logout } = AuthHub;

  return (
    <S.HeaderContainer>
      <Container>
        <S.Wrapper>
          <Button type="button" variant="outlined" color="primary" onClick={logout}>
            Log Out
          </Button>
        </S.Wrapper>
      </Container>
    </S.HeaderContainer>
  );
});
