import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import futurelabLogo from '../../assets/images/lab_logo.jpg';
import device from '../../responsive';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 12%;
    padding: 10px 10%; // * 양옆 10% 는 공통적으로 적용 but 중간에 line 때문에 전체 container에 적용하지 않음.
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 9999999;
    background-color: white;
`;

const Logo = styled.img`
    width: 170px;
    height: 85px;
    margin-right: 50px;
`;

const Tabs = styled.div`
    display: flex;
    width: 60%;
`;

const Tab = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    width: 100%;
    min-width: 140px;
    color: rgba(102, 102, 102, 0.85);
    &:hover {
        color: black;
        cursor: pointer;
    }
    &:not(:last-child) {
        /* margin-right: 15px; */
    }
    &:not(:first-child) {
        @media ${device.small} {
            display: none;
        }
    }
`;

const Header: React.FC = () => {
    return (
        <Container>
            <Link to="/">
                <Logo src={futurelabLogo}></Logo>
            </Link>
            <Tabs>
                <Tab>스터디 신청하기</Tab>
                <Tab>
                    <Link to="/program">program</Link>
                </Tab>
                <Tab>awards</Tab>
                <Tab>project</Tab>
                <Tab>수강후기</Tab>
                <Tab>
                    <Link to="/qna">Q&A</Link>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Header;
