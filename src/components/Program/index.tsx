import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import device from '../../responsive';

import back1 from '../../assets/images/back1.jpg';
import back2 from '../../assets/images/back2.jpg';
import BlackBox from '../BlackBox';
import Deep from '../Deep';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 100px;
`;
const Program: React.FC = () => {
    return (
        <Container>
            <Deep />
        </Container>
    );
};

export default Program;
