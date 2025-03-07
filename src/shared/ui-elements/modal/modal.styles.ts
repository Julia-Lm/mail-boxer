import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  background-color: white;
  border-radius: 10px;
  box-shadow:
    0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  padding: 24px;
`;

export const Title = styled("p")`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
`;
