import styled from "styled-components";

export const Textarea = styled.textarea`
    resize: none;
    width: 100%;
    outline: none;
    border: 1px solid #21a6b7;
`

export const Button = styled.button`
    border: none;
    background: #00bcd4;
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #21a6b7;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`