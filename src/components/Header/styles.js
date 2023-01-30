import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 11.6rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 8rem;    

    > h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Search = styled.div`  
  padding: 0 6.4rem;
  flex-grow: 1;
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;    
    gap: 1rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    font-size: 1.4rem;
    line-height: 1.8rem;
`;