import { observer } from "mobx-react-lite";
import { AuthHub } from "app/store/auth/auth.store.ts";

export const EmailHome = observer(() => {
  const { user } = AuthHub;
  console.log(user);

  return <>EmailHome</>;
});
