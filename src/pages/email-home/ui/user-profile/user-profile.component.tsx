import { UserProfileProp } from "./user-profile.type";
import * as S from "./user-profile.styles";

export const UserProfile = ({ user }: UserProfileProp) => {
  const userInfo = [
    {
      label: "User name:",
      value: user?.username || "---",
    },
    {
      label: "User email:",
      value: user?.email || "---",
    },
  ];
  return (
    <S.Wrapper>
      {userInfo.map(({ label, value }) => (
        <S.InfoGroup key={label}>
          <S.InfoLabel>{label}</S.InfoLabel>
          <S.InfoValue>{value}</S.InfoValue>
        </S.InfoGroup>
      ))}
    </S.Wrapper>
  );
};
