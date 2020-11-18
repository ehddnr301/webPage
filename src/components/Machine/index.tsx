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
    margin-bottom: 40px;
    animation: 1s ${fadeIn} ease-out;
    &:first-child {
        font-size: 3vw;
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

const Machine: React.FC = () => {
    return (
        <Container>
            <FirstContent>
                <TextBox>
                    <Title>Machine Learning Course</Title>
                    <ContentBox>
                        <Content>
                            <ContentTitle>Course 1</ContentTitle>
                            <ContentSubTitle>Basic and Review</ContentSubTitle>
                            <ContentText>
                                해당 강좌는{' '}
                                <span>basic부터 competition까지</span> 원활한
                                흐름을 목표로 삼고 있습니다. 이를 위해 기초를
                                확실히 다지는 것이 중요합니다. Machine
                                learning에 대한 이론적 지식을 배우고 난 후,
                                Machine learning은 데이터 정제와 특성 파악 및
                                생성이 필수적이기 때문에 데이터 분석에 특화된
                                <span>Pandas</span>를 다시 짚고 넘어가며 기초를
                                다집니다. 이 과정은 앞으로 배워갈 내용을
                                지탱해줄 필수적인 뿌리가 될 것입니다.
                            </ContentText>
                        </Content>
                        <Content>
                            <ContentTitle>Course 2</ContentTitle>
                            <ContentSubTitle>
                                Feature Engineering and Modeling
                            </ContentSubTitle>
                            <ContentText>
                                기초가 어느 정도 자리 잡혔다면 이론과 실습을
                                병행하여 실전에 대한 감을 익힙니다. 변수 정제,
                                파악 및 생성 등 Machine learning의 필수 요소인
                                <span>Feature Engineering</span>을 실제
                                competition 수상자들이 어떻게 활용하고 있는지를
                                배웁니다. 또한, 모델의 Hyperparameter 최적화,
                                파라미터에 대한 설명, 모델의 기초적인 설명 등을
                                배우게 됩니다.
                            </ContentText>
                        </Content>
                        <Content>
                            <ContentTitle>Course 3 + Project</ContentTitle>
                            <ContentSubTitle>
                                실전과 Competition
                            </ContentSubTitle>
                            <ContentText>
                                다른 Data Science Competition 수상자들의
                                Solution을 분석하고 공유하면서{' '}
                                <span>대회 수상 비법</span>들을 정리합니다. 이를
                                통해 실제 Competition 및 Project에서의{' '}
                                <span>keypoint</span>들을 배워봅니다. 또한, 이
                                과정에서 미래연구소 자체 Competition을
                                진행합니다. 그동안 공부한 내용들을 잘 적용하여
                                수강생들끼리 순위 경쟁도 하고, Competition 종료
                                이후에는 각자의 번뜩이는 idea를 공유해서 본인의
                                접근법을 다시 되돌아보는 시간을 가집니다. 이를
                                통해 수강생 분들은 다른 대회에서도 본인의 실력을
                                마음껏 발휘할 수 있게 됩니다. 그리고 모든 과정을
                                통틀어, 우수 수강자분은 강의 종료 이후에{' '}
                                <span>Tutor와 팀</span>을 이루어 대회에 참가하는
                                좋은 경험을 만들어 드리고자 합니다.
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

export default Machine;
