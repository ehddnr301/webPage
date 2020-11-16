import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';

const Container = styled.div`
    width: 100%;
    height: 200vh;
    padding-top: 100px;
`;
const Home: React.FC = () => {
    return (
        <Container>
            <Banner />
        </Container>
    );
};

export default Home;
