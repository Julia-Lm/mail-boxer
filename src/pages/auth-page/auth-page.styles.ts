import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-height: 45vh;
  margin: auto 0;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const GoLinkBtn = styled(Button)``;
