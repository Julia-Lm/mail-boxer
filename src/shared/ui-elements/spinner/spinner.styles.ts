import styled from "styled-components";

export const SpinnerContainer = styled("div")`
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.spinner.backgroundColor};
  border-top: 4px solid ${({ theme }) => theme.spinner.border};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
