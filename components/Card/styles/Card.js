import styled from 'styled-components';

export const Container = styled.div`
    width: ${(props) => (props.width ? props.width : '100%')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border: solid 1px #d0d7de;
    border-radius: 6px;
    padding: 16px;
    margin-bottom: 16px;

    @media (max-width: 732px) {
        width: 100%;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid #d0d7de;
        padding: 0;
        padding-bottom: 16px;
        padding-top: 16px;
        margin-bottom: 4px;
    }
`;

export const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin: ${(props) => (props.margin ? props.margin : '0')};
    
    svg {
        margin-right: 4px;
    }
    div {
        margin-right: 16px;
    }
`;

export const Title = styled.h1`
    font-size: 1rem;
    font-weight: 600;
`;

export const Text = styled.p`
    font-size: 12px;
    color: gray;
`;

export const Language = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LanguageColor = styled.span`
    background-color: ${(props) => props.color};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 4px;
`;

export const Star = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    &:hover {
        color: #0969da;
        cursor: pointer;
    }
    a {
        color: inherit;
    }
`;
export const Topics = styled.div`
    margin: 4px 0 4px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
`;

export const Topic = styled.span`
    margin: 0 0.125em 0.333em 0;
    display: inline-block;
    padding: 0 7px;
    font-weight: 500;
    font-size: 12px;
    border-radius: 2em;
    padding-right: 10px;
    padding-left: 10px;
    line-height: 22px;
    color: #0969da;
    background-color: #ddf4ff;

    :hover {
        cursor: pointer;
        background-color: #0969da;
        color: #ffffff;
    }
`;

export const License = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
