import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoGroup = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const InfoLabel = styled("p")`
  font-size: 0.875rem;
  font-weight: 400;
`;

export const InfoValue = styled("p")`
  font-size: 1rem;
  font-weight: 500;
`;
