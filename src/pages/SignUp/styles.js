import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;    

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin: 4.8rem 0;
    }

    > p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }    

    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        
        svg {
            font-size: 2rem;
        }
      
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;