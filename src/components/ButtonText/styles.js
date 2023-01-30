import styled from "styled-components";

export const Container = styled.button`
    width: 20rem;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY};

    border-radius: 8px;
    border: none;

    font-size: 1.6rem;   
    font-weight: 500;
    padding: 0 1.6rem;
    
    display: flex;    
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    > svg {
        width: 2rem;
        height: 2rem;
    }
`;