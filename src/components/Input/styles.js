import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};  
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};

  border-radius: 1rem;
  margin-bottom: 0.8rem;  

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    line-height: 2.1rem;
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }
  }
    svg {
      margin-left: 1.6rem;
  }
`;