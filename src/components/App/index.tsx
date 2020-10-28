import * as React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import PageRoutes from '../PageRoutes';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

function App(): React.ReactElement {
    return (
        <Container>
            <GlobalStyles />
            <PageRoutes />
        </Container>
    );
}
export default App;
