import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;   
    
    display: flex;    
    align-items: flex-end;
    gap: 0.8rem;

    > svg {
        width: 2rem;
        height: 2rem;
    }
`;