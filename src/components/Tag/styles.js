import styled from "styled-components";

export const Container = styled.span`
    margin-right: 0.8rem;    
    padding: 0.5rem 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 0.8rem;

    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
`;