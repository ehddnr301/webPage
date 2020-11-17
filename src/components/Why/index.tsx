import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';

const Container = styled.div`
    width: 100%;
    height: 30%;
    padding: 3% 10%;
`;

const Title = styled.div`
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
`;

const CardWrapper = styled.div`
    display: flex;
    & > div:not(:last-child) {
        margin-right: 30px;
    }
`;

const Why: React.FC = () => {
    return (
        <Container>
            <Title>why do you need us ?</Title>
            <CardWrapper>
                <Card color={'white'} title={'비용'} count={1}>
                    {
                        '제가 수강했던 학원은 4개월에 440만원 정도였습니다. 대학생이 다니기엔 너무 부담이 되는 비용이였습니다. 그래서 생각해 보았습니다. 꼭 전문가가 직접 가르쳐야하는가? 결과는 NO 였습니다. 이미 인터넷상에 올라와 있는 전문가분들의 강의를 듣고, 어려워하실 부분이나 부족한 부분을 저희가 보충해준다면, 충분히 학원에서 강의하시는 전문가분들의 강의 수준 이상을 만들어 낼 수 있다고 생각합니다.'
                    }
                </Card>
                <Card color={'white'} title={'막막함'} count={2}>
                    {`
                                AI, 인공지능, 딥러닝, 머신러닝 사실 저 또한 1년
                                전에는 이런 단어를 보면 제가 할 수 있겠다고는
                                생각도 못했습니다. 그러나
                                제가 도전해 본 결과 할 수 있다는 걸
                                깨달았습니다. 물론 혼자하기엔 굉장히 힘들고
                                어려운 길입니다. 그래서 여러분께서 이를 배우실
                                때는 조금이라도 더 쉽게, 막막하지 않게 도움을
                                드리고자 이 연구소를 만들었습니다.
                    `}
                </Card>
                <Card color={'white'} title={'협업'} count={3}>
                    {
                        '더 이상 1 더하기 1 은 2가 아닌 시대라고 생각합니다. 저희가 구성한 팀 시스템 속에서 같이 공부하고 연구하는 친구와 협업을 통해 프로젝트도 진행하고, 여러 대회도 나가며 추후에는 팀원과 재미난 아이디어로 창업까지 이어질 수 있다고 확신합니다.'
                    }
                </Card>
            </CardWrapper>
        </Container>
    );
};

export default Why;
