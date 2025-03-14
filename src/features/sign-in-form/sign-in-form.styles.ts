import styled from "styled-components";
import { TextField } from "@mui/material";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;
  max-width: 350px;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  position: relative;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const FormLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const ErrorMessage = styled("p")<{ $isHidden: boolean }>`
  color: ${({ theme }) => theme.errorText};
  font-size: 0.75rem;
  font-weight: 400;
  position: absolute;
  bottom: ${({ $isHidden }) => ($isHidden ? "0" : "-20px")};
  left: 0;
  visibility: ${({ $isHidden }) => ($isHidden ? "hidden" : "visible")};
  opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
`;

export const Input = styled(TextField)<{ $isMessage: boolean }>`
  & .MuiFormHelperText-root.Mui-error,
  .MuiFormHelperText-root {
    height: ${({ $isMessage }) => ($isMessage ? "20px" : "0")};
    opacity: ${({ $isMessage }) => ($isMessage ? "1" : "0")};
    display: grid;
    grid-template-rows: ${({ $isMessage }) => ($isMessage ? "1fr" : "1fr")};
    transition: 0.3s ease;
  }
`;
