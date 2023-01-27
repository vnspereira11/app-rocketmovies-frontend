import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 27.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};  
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: 1rem;
    
    resize: none;

    margin-top: 4rem;
    padding: 1.6rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    }
`;