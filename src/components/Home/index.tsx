import * as React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import Why from '../Why';
import Footer from '../Footer';
import Term from '../Term';
import device from '../../responsive';

const Container = styled.div`
    width: 100%;
    height: 250vh;
    padding-top: 100px;
    position: relative;
    @media ${device.small} {
        height: 320vh;
    }
`;
const Home: React.FC = () => {
    return (
        <Container>
            <Banner />
            <Term />
            <Why />
            <Footer></Footer>
        </Container>
    );
};

export default Home;
