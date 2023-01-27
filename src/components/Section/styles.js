import styled from "styled-components";

export const Container = styled.section`    
    margin: 4rem 0 2rem 0;
    
    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 2.4rem;        
    }
`;