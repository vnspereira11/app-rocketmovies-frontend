import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow-y: auto;   
        padding: 0 2rem;
    }

    main::-webkit-scrollbar {
        width: 0.8rem;    
    }
  
    main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
        width: 0.8rem;
    }
`;

export const Content = styled.div`
    max-width: 112rem;
    margin: 0 auto;    

    display: flex;
    flex-direction: column;

    > header {
        margin: 4rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        > h1 {
            font-size: 3.2rem;
            font-weight: 400;
        }
    }
`;

export const New = styled(Link)`
    width: 20rem;
    height: 5.6rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY};

    border-radius: 8px;
    
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

