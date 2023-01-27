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
        padding: 6.4rem 0;
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

    .movie {
        display: flex;
        align-items: center;
        gap: 1.9rem;
        margin: 2.4rem 0;

        > h1 {
            font-size: 3.6rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        }
  } 

  .author {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4rem;

    > img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        font-size: 1.4rem;
    }

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
     }  
  }

  .description {
        margin-top: 4rem;
        text-align: justify;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
     }
`;