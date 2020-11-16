// TODO : children props로 내용, 색 설정 하기.
import * as React from 'react';
import styled from 'styled-components';

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

const Card: React.FC = () => {
    return (
        <CardA>
            <InnerA>
                <FrontA></FrontA>
                <BackA></BackA>
            </InnerA>
        </CardA>
    );
};

export default Card;
