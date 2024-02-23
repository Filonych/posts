import styled from "styled-components";

export const Image = styled.img`
    max-width: 200px;
    width: 100%;
    float: left;
    margin-right: 20px;
`

export const Text = styled.div`
    font-size: 15px;
`

export const LinkWrapper = styled.div`    
    margin: 15px 0 0 0;
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const DeleteButton = styled.button`
    border: none;
    background: #00bcd4;
    padding:  5px 15px;
    border-radius: 10px;
    color: white;
    cursor: pointer;

    &:hover {
        background: red;
    }
`

export const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
`

export const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: black;
    border: 1px solid white;
    padding: 15px;
    background: white;
    display: flex;
    gap: 15px;
    flex-direction: column;
    border-radius: 15px;
`

export const ModalText = styled.div`
    color: black;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

export const ModalContent = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
`



