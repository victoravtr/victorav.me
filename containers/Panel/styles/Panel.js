import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
    max-width: 900px;
    margin: 2rem auto;
    border: solid 1px rgba(175, 184, 193, 0.2);
    border-radius: 6px;
    
    @media (max-width: 732px) {
        padding-top: 24px;
        border: none;
        margin-top: 2rem;
        border-top: solid 1px rgba(175, 184, 193, 0.2);

    }
`

export const Title = styled.div`
    font-size: 0.75rem;
    color: gray;
    @media (max-width: 732px) {
        display: flex;
        justify-content: start;
        align-items: center;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    margin-bottom: 16px;

    @media (max-width: 732px) {
        border-top: solid 1px rgba(175, 184, 193, 0.2);
    }
`