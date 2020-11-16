import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div`
    width: 100%;
    height: 30%;
    padding: 3% 10%;
`;

const Title = styled.div`
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
`;

const CardWrapper = styled.div`
    display: flex;
    & > div:not(:last-child) {
        margin-right: 30px;
    }
`;

const CardA = styled.div`
    width: 100%;
    height: 500px;
    background-color: transparent;
    perspective: 1000px;
    &:hover > div {
        transform: rotateY(180deg);
    }
`;
const InnerA = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

const FrontA = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;
`;
const BackA = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
`;

const CardB = styled.div`
    width: 100%;
    height: 500px;
    background-color: orange;
`;
const CardC = styled.div`
    width: 100%;
    height: 500px;
    background-color: lightseagreen;
`;

const Why: React.FC = () => {
    return (
        <Container>
            <Title>why do you need us ?</Title>
            <CardWrapper>
                <Card />
                <Card />
                <Card />
            </CardWrapper>
        </Container>
    );
};

export default Why;
