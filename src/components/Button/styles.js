import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-weight: 500;

    border: 0;
    border-radius: 1rem;
    padding: 0 1.6rem;
    margin: 1.6rem 0 4.2rem;

    &:disabled {
        opacity: 0.5;        
    }
`;

