import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
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

export const QuillWrapper = styled("div")<{ $isError: boolean }>`
  .custom-quill {
    max-height: 200px !important;
    overflow-y: auto !important;
  }

  & .error {
    color: ${({ theme }) => theme.errorText};
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.66;
    letter-spacing: 0.03333em;
    margin-top: 4px;
    margin-left: 14px;
    margin-right: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
`;
