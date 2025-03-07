import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.header.border};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  color: ${({ theme }) => theme.header.link.color};
`;
