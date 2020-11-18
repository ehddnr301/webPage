import * as React from 'react';
import styled from 'styled-components';
import device from '../../responsive';
import QnABox from '../QnABox';

const Container = styled.div`
    width: 100%;
    height: 150vh;
    padding-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    margin-top: 5%;
`;
const QnA: React.FC = () => {
    return (
        <Container>
            <Title>자주 묻는 질문들</Title>

            <QnABox
                title={'딥러닝 입문반과 머신러닝 입문반의 차이는 무엇인가요?'}
            >
                {
                    '수업 내용에서는 딥러닝 입문반에서는 딥러닝만 다루고 머신러닝 입문반은 딥러닝 이외의 머신러닝만 다룰 예정입니다.|또한, 비정형 data에 특화된 딥러닝의 특성상, 정형 data만 다루고 싶은 분들은 머신러닝 입문반을 신청하는 것이 좋습니다.|그리고 난이도적인 측면에서는 머신러닝 입문반은 딥러닝 입문반보다 선수 지식을 더 필요로 해서 딥러닝 입문반이처음 수강하기 수월합니다.|개개인별로 상황이 다를 수 있으니 어떤 반을 수강해야할지 판단이 어려운 분은 홈페이지의 번호로 연락주시면 정확한 선택하시는데 도움을 드리겠습니다.'
                }
            </QnABox>
            <QnABox title={'입문자인데 수강이 가능할까요?'}>
                {
                    '강의를 찾아주시는 분들 중 평균적으로 절반 정도가 python을 다뤄보지 않으셨고 그 중 절반은 프로그래밍을 접하지 않으신 분들이셨습니다.|하지만 저희 홈페이지에 게시된 우수 프로젝트의 경우 그 중 절반이 입문자 분들이 만드신 프로젝트입니다.'
                }
            </QnABox>
            <QnABox
                title={
                    '미래연구소 딥러닝 입문반을 수강하고 나면 무엇을 얻을 수 있는지 궁금합니다.'
                }
            >
                {
                    '저희가 미래연구소를 2년간 운영하면서 저희 프로그램을 통해 본인 분야에서 어떤 방식으로 성장하시는지 다양한 사례를 보았습니다.|1) 학부생들의 경우 졸업 논문을 작성하시기도 했고 본인의 전공과 data science를 접목시켜서 진로를 찾으시기도 하십니다. 최근에 생긴 인공지능 대학원에 진학하시는 분들도 계셨습니다.|2) 직장인들 같은 경우에도 본인의 업무에서 ML을 사용하는 case가 많아 저희 프로그램을 통해 이를 해결하십니다.'
                }
            </QnABox>
            <QnABox
                title={
                    'Deep learning specialization 강의를 혼자서 듣는 것과 미래연구소 프로그램을 수강하는 것의 차별점은 무엇인가요?'
                }
            >
                {
                    '1) 이론만 강의하는 것이 아니라 실습 강의를 통해 9주차부터 조별로 real data를 가지고 프로젝트 구현하실 수 있게 합니다.|2) 현업에서 일하시는 미래연구소 프로젝트 튜터님과 상담을 받는 시간을 가져서 좀 더 professional한 프로젝트를 완성하는데 있어 겪을 시행착오를 줄이고자 합니다.|3) 저희가 구축한 슬랙을 통해 추후 스터디를 구성하시는 분들도 계십니다. 수강 이후 자체적으로 스터디를 통해 수상하신 실적을 이 홈페이지에 업로드 했습니다.'
                }
            </QnABox>
        </Container>
    );
};

export default QnA;
