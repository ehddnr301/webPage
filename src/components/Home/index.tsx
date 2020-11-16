import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import Why from '../Why';

const Container = styled.div`
    width: 100%;
    height: 200vh;
    padding-top: 100px;
`;
const Home: React.FC = () => {
    return (
        <Container>
            <Banner />
            <Why />
        </Container>
    );
};

export default Home;
