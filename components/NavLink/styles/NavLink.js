import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        padding-right: 5px;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }
    a:hover {
        color: #bebfc1;
    }

    @media (max-width: 732px) {
        padding: 0;
    }
`;
export const Text = styled.span`
    font-size: 14px;
    font-weight: 600;
    margin: 0;
    margin-right: 16px;
`;
