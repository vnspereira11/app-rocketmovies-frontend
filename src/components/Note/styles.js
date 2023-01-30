import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;
    border-radius: 1.6rem;

    padding: 2rem;
    margin-bottom: 2.4rem;

    > h1 {
        flex: 1;
        text-align: left;
        font-size: 2.4rem;        
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        margin-bottom: 0.8rem;
        
    }

    > p {        
        text-align: left;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        margin-top: 1.6rem;
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 1.6rem;
    }
`;