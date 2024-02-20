import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Post = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
`

export const Image = styled.img`
    max-width: 200px;
    width: 100%;
`

export const Title = styled.div``

export const DetailLink = styled(Link)`
color: black;
    text-decoration: none;

    &:hover {
        color: #00bcd4;
        text-decoration: underline;
    }
`