// TODO : children props로 내용, 색 설정 하기.
import * as React from 'react';
import styled from 'styled-components';
import BlackBox from '../BlackBox';
import hopeless from '../../assets/images/hopeless.jpg';
import money from '../../assets/images/money.jpg';
import colabo from '../../assets/images/colabo.jpg';
import device from '../../responsive';

const CardA = styled.div`
    width: 100%;
    height: 300px;
    background-color: transparent;
    perspective: 1000px;
    &:hover > div {
        transform: rotateY(180deg);
    }
    &:hover > div > div > span {
        display: none;
    }
    &:hover > div > div > div {
        display: none;
    }
    @media ${device.small} {
        width: 200px;
        height: 200px;
    }
`;
const InnerA = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.97);
`;

interface BackgroundProp {
    count: number;
}
const FrontA = styled.div<BackgroundProp>`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background: ${(props) =>
            props.count === 1
                ? `url(${money})`
                : props.count === 2
                ? `url(${hopeless})`
                : `url(${colabo})`}
        center center no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30%;
    font-size: 3vw;
    @media ${device.small} {
        font-size: 5vw;
    }
    & > span {
        z-index: 110;
    }
`;
const BackA = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: #343a40;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2vw;
    font-weight: 300;
    line-height: 1.5;
`;

interface IProps {
    color: string;
    title: string;
    count: number;
}

const Card: React.FC<IProps> = ({ color, title, children, count }) => {
    return (
        <CardA>
            <InnerA>
                <FrontA color={color} count={count}>
                    <span>{title}</span>
                    <BlackBox opacity={0.5} />
                </FrontA>
                <BackA>
                    <p>{children}</p>
                </BackA>
            </InnerA>
        </CardA>
    );
};

export default Card;
