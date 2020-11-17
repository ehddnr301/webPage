import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5%;
    position: absolute;
    bottom: 0;
    margin-top: 100px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Info = styled.div`
    &:first-child {
        margin-bottom: 10px;
    }
`;

const Footer: React.FC = () => {
    return (
        <Container>
            <Info>
                미래연구소 사업자등록번호 : ‌143-23-00801 기타 교육 서비스업
            </Info>
            <Info>‌‌H.P) ‌010-4224-3286 E.mail) bkaunyun@gmail.com</Info>
        </Container>
    );
};

export default Footer;
