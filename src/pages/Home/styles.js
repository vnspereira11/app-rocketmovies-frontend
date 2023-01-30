import styled from "styled-components";

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