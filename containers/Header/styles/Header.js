import styled from "styled-components";

export const Container = styled.header`
    background-color: #24292f;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 16px;
    padding-left: 32px;
    padding-right: 32px;
    @media (max-width: 732px) {
        padding-left: 0;
        padding-right: 0;
        padding: 16px 0;
        justify-content: center;
    }
`

export const Title = styled.h1`
    color: #ffffff;
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    margin-right: 16px;
`

export const Icon = styled.img`
    border-radius: 50%;
    height: 32px;
    margin-right: 16px;
`