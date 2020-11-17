import * as React from 'react';
import styled from 'styled-components';
import banner from '../../assets/images/banner.jpg';
import BlackBox from '../BlackBox';

const Container = styled.div`
    background: url(${banner}) center center no-repeat;
    background-size: cover;
    width: 100%;
    height: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextBox = styled.div`
    z-index: 99;
    color: white;
    font-size: 30px;
    margin-top: 10%;
`;

const Text = styled.div`
    text-align: center;
    transition: color 0.3s ease-in-out;
    transition: font-size 0.3s ease-in-out;

    &:not(:last-child):hover {
        color: #ffca00;
        font-size: 32px;
        cursor: pointer;
    }
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    &:first-child {
        margin-bottom: 100px;
        font-size: 38px;
        &:hover {
            font-size: 40px;
        }
    }
`;

const Banner: React.FC = () => {
    return (
        <Container>
            <BlackBox opacity={0.7} />
            <TextBox>
                <Text>미래연구소 15기(서울, 수원)</Text>
                <Text> 딥러닝 입문(서울-점심반) 신청하기 </Text>
                <Text> 딥러닝 입문(서울-저녁반) 신청하기 </Text>
                <Text> 딥러닝 입문(수원) 신청하기 </Text>
                <Text> 머신러닝 입문(서울) 신청하기 </Text>
                <Text> 상담문의 010-5390-3513 </Text>
            </TextBox>
        </Container>
    );
};

export default Banner;
