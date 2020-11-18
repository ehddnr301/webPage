import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../../responsive';

import back1 from '../../assets/images/back1.jpg';
import back2 from '../../assets/images/back2.jpg';
import BlackBox from '../BlackBox';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const FirstContent = styled.div`
    background: url(${back1}) center center no-repeat;
    position: relative;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 5%;
`;
const TextBox = styled.div`
    z-index: 9998;
    color: white;
    font-size: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Title = styled.div`
    font-size: 2.5vw;
    margin-bottom: 20px;
    animation: 1s ${fadeIn} ease-out;
    &:first-child {
        font-size: 3vw;
    }
    &:nth-child(2) {
        margin-bottom: 50px;
    }
`;

const ContentBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
    font-size: 1vw;
`;

const ContentTitle = styled.div`
    margin-bottom: 20px;
    animation: 2s ${fadeIn} ease-out;
    color: #ffbe00;
    font-size: 1.5vw;
`;

const ContentSubTitle = styled.div`
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.3vw;
    animation: 2s ${fadeIn} ease-out;
    & > span {
        color: #ffbe00;
    }
`;
const ContentText = styled.div`
    animation: 3s ${fadeIn} ease-out;

    margin-bottom: 10px;
    line-height: 1.3;
    & > span {
        color: #ffbe00;
    }
`;

const Button = styled.button`
    margin-top: 5%;
    width: 200px;
    height: 60px;
    z-index: 1000;
    font-size: 2vw;
    background-color: white;
    border: 3px solid #ffbe00;
    color: #ffbe00;
    text-transform: uppercase;
    transition: background-color 0.5s ease, color 0.5s ease;
    cursor: pointer;
    box-shadow: 10px 10px rgba(77, 77, 77, 0.5);
    border-radius: 25px;

    &:hover {
        background-color: #ffbe00;
        color: white;
    }
    &:active {
        border: 10px dotted;
    }
`;

const Deep: React.FC = () => {
    return (
        <Container>
            <FirstContent>
                <TextBox>
                    <Title>Deep Learning Course</Title>
                    <Title>
                        Coursera Deep Learning Specialization 강의를 활용한 Flip
                        Learning 교육
                    </Title>
                    <ContentBox>
                        <Content>
                            <ContentTitle>Course 1</ContentTitle>
                            <ContentSubTitle>
                                Neural Networks and Deep Learning{' '}
                                <span>(1~4주차)</span>
                            </ContentSubTitle>
                            <ContentText>
                                Deep learning의 전반적인 분야에 대해 설명한 뒤,
                                Deep learning의 기본 구조인{' '}
                                <span>Neural Network</span>에 대해 배우게
                                됩니다. 이들의 작동원리에 대해 배우는 기간으로{' '}
                                <span>실습보다는 이론적인 부분</span>에 집중해서
                                배웁니다. 이를 통해 그동안 Deep learning이라는
                                막연히 알던 분야에 대해 좀 더 구체적으로 배우게
                                됩니다. 또한, 5~8주차에서 직접 여러 기법들을
                                구현할 수 있게 하는 기틀을 마련하게 됩니다.
                            </ContentText>
                            <ContentText>
                                deep learning을 구현하기 위한 data science의
                                기초 라이브러리인 <span>numpy</span>도 배웁니다.
                            </ContentText>
                            <ContentText>
                                deep learning에 필요한 기초 선수지식은
                                미래연구소에서{' '}
                                <span>자체 제작한 영상 자료</span>를 통해
                                교육합니다.
                            </ContentText>
                        </Content>
                        <Content>
                            <ContentTitle>Course 2</ContentTitle>
                            <ContentSubTitle>
                                Improving Deep Neural Networks: Hyperparameter
                                tuning, Regularization and Optimization
                                <span>(5~8주차)</span>
                            </ContentSubTitle>
                            <ContentText>
                                이 과정에서는 이전 1~4주차의 이론적 토대를
                                바탕으로 딥러닝에서 주로 쓰이는 기법들을 배우고
                                구현해보는 시간을 가집니다. 이를 통해, 여러분이
                                직접 딥러닝을 간단히 구현해볼 수 있습니다.
                                구현은 <span>Tensorflow</span>와{' '}
                                <span>Keras</span>를 통해 진행합니다.
                            </ContentText>
                        </Content>
                        <Content>
                            <ContentTitle>Course 3 + Project</ContentTitle>
                            <ContentSubTitle>
                                Structuring Machine Learning Projects{' '}
                                <span>(9~12주차)</span>
                            </ContentSubTitle>
                            <ContentText>
                                이 과정에서는 real data를 가지고 성공적인
                                머신러닝 프로젝트를 구현하는 방법을 배우게
                                됩니다. <span>Pandas</span>와{' '}
                                <span>Matplotlib</span> 등 data science에서
                                필수적인 라이브러리를 교육합니다. 5~8주차에서
                                배우지 못한 <span>고급 기법</span>들도 배우게
                                됩니다.
                            </ContentText>
                            <ContentText>
                                12주간 배운 내용을 종합하여 Kaggle 데이터를
                                이용한 프로젝트를 병행합니다. 또한, 전공과
                                관계없이 프로젝트를 무사히 구현할 수 있도록
                                미래연구소 전문 튜터들이{' '}
                                <span>1:1 로 튜터링</span>하는 시간도 가집니다.
                            </ContentText>
                        </Content>
                    </ContentBox>
                </TextBox>
                <Button>수강신청</Button>
                <BlackBox opacity={0.8} />
            </FirstContent>
        </Container>
    );
};

export default Deep;
