import styled, { css } from "styled-components";

export const BackCard = styled.button`
    width: 7em;
    height: 7em;
    margin: 1em;
    border: none;
    background-color: #311E75;
    ${({ isClicked }) => {
        return css`
        opacity: ${isClicked ? '0' : '1'};
        `;
    }}
`;

export const YellowCard = styled(BackCard)`
    background-color: yellow;
`;

export const RedCard = styled(BackCard)`
    background-color: red;
`;

export const GreenCard = styled(BackCard)`
    background-color: green;
`;

export const BlueCard = styled(BackCard)`
    background-color: blue;
`;

export const BlackCard = styled(BackCard)`
    background-color: black;
`;

export const WhiteCard = styled(BackCard)`
    background-color: White;
`;

export const PurpleCard = styled(BackCard)`
    background-color: Purple;
`;

export const OrangeCard = styled(BackCard)`
    background-color: orange;
`;

export const PinkCard = styled(BackCard)`
    background-color: pink;
`;

export const BrownCard = styled(BackCard)`
    background-color: brown;
`;

export const LightGreenCard = styled(BackCard)`
    background-color: lightgreen;
`;

export const LightBlueCard = styled(BackCard)`
    background-color: lightblue;
`;


export const FlipCard = styled(BackCard)`
    opacity: 0;
`;