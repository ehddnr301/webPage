import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import Why from '../Why';
import Footer from '../Footer';

const Container = styled.div`
    width: 100%;
    height: 250vh;
    padding-top: 100px;
    position: relative;
`;
const Home: React.FC = () => {
    return (
        <Container>
            <Banner />
            <Why />
            <Footer></Footer>
        </Container>
    );
};

export default Home;
