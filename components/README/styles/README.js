import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
`;

export const Title = styled.div`
    font-size: 0.5rem;
    color: gray;
`;

export const Content = styled.div`

    table {
        display: block;
        width: 100%;
        width: max-content;
        max-width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
    }

    tr {
        background-color: #ffffff;
        border-top: 1px solid #ffffff;
    }

    th, td {
    padding: 6px 13px;
    border: 1px solid #d0d7de;
    }

    img {
        max-width: 100%;
    }

`;
