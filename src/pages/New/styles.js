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
    }

    main::-webkit-scrollbar {
        width: 0.8rem;    
    }
  
    main::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 0.8rem;
        width: 0.8rem;
    }
    
    .tags {        
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .call-to-action {
        display: flex;        
        gap: 2rem;

        button:nth-child(1) {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    max-width: 112rem;
    margin: 4rem auto;

    > header {
        
        a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        svg {
            font-size: 2rem;;
        }

        h1 {
            margin: 2.4rem 0 4rem 0;
            font-size: 3.6rem;
            font-weight: 500;
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 4rem;
`;