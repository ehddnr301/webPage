import * as React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";

const Container = styled.div`
    width:100%;
    height:100%;
`;

function App(): React.ReactElement {
  return <Container><GlobalStyles></GlobalStyles></Container>
}
export default App;

