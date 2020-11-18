import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import device from '../../responsive';

import back1 from '../../assets/images/back1.jpg';
import back2 from '../../assets/images/back2.jpg';
import BlackBox from '../BlackBox';
import Deep from '../Deep';
import Machine from '../Machine';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 100px;
    position: relative;
`;

const Button = styled.div`
    position: absolute;
    width: 150px;
    background-color: #ffbe00;
    color: white;
    top: 1%;
    right: 1%;
    z-index: 9999;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 25px;
`;

const Program: React.FC = () => {
    const [course, setCourse] = useState(false);
    const onClick = () => {
        setCourse((s) => !s);
        console.log(course);
    };
    return (
        <Container>
            <Button onClick={onClick}>
                {course ? `Machine Learning Course` : `Deep Learning Course`}
            </Button>
            {course ? <Deep /> : <Machine />}
        </Container>
    );
};

export default Program;
