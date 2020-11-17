import * as React from 'react';
import styled from 'styled-components';

interface OpacityProp {
    opacity: number;
}
const Container = styled.div<OpacityProp>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 50%,
        rgba(255, 255, 255, 1) 100%
    );
    opacity: ${(props) => props.opacity};
`;

interface IProps {
    opacity: number;
}

const BlackBox: React.FC<IProps> = ({ opacity = 0.7 }) => {
    return <Container opacity={opacity} />;
};

export default BlackBox;
