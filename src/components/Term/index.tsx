import * as React from 'react';
import styled from 'styled-components';
import device from '../../responsive';

const Container = styled.div`
    width: 100%;
    height: 25%;
    padding: 20px 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.small} {
        height: 20%;
        margin-bottom: 20px;
    }
`;

const Title = styled.div`
    font-size: 2.4vw;
    font-weight: 600;
    &:nth-child(2) {
        margin-bottom: 100px;
        @media ${device.small} {
            margin-bottom: 25px;
        }
    }
    &:first-child {
        margin-bottom: 15px;
    }
    @media ${device.small} {
        font-size: 3.4vw;
    }
`;

const InfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    @media ${device.small} {
        flex-direction: column;
    }
`;

const InfoDivider = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media ${device.small} {
        margin-bottom: 10px;
    }
    & > div:not(:last-child) {
        @media ${device.small} {
            font-size: 2vw;
            margin-right: 5px;
        }
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InfoTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 2vw;
    font-weight: 600;
    @media ${device.small} {
        font-size: 16px;
    }
`;

interface marginProp {
    margin: boolean;
}
const InfoItem = styled.div<marginProp>`
    font-size: 1vw;
    margin-bottom: ${(props) => (props.margin ? '10px' : null)};
    text-align: center;
    & > span {
        text-decoration-line: line-through;
    }
    & > strong {
        font-weight: 600;
    }
    & > h1 {
        font-weight: 600;
        color: #e74c3c;
    }
    @media ${device.small} {
        font-size: 2vw;
    }
`;

const Term: React.FC = () => {
    return (
        <Container>
            <Title>Deep Learning/Machine Learning beginner 15th</Title>
            <Title>미래연구소 딥러닝/머신러닝 입문 스터디 15기</Title>
            <InfoWrapper>
                <InfoDivider>
                    <Info>
                        <InfoTitle>스터디 시간</InfoTitle>
                        <InfoItem margin={false}>
                            <strong>서울 점심 딥러닝 입문반(12주)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            1/3~3/21 매주 일요일 12:00~15:00
                        </InfoItem>
                        <InfoItem margin={false}>
                            <strong>서울 저녁 딥러닝 입문반(12주)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            1/3~3/21 매주 일요일 19:00~22:00
                        </InfoItem>
                        <InfoItem margin={false}>
                            <strong>수원 딥러닝 입문반(12주)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            1/2~3/26 매주 토요일 18:30~21:30
                        </InfoItem>
                        <InfoItem margin={false}>
                            <strong>서울 머신러닝 입문반(9주)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            1/3~2/28 매주 일요일 15:15~18:15
                        </InfoItem>
                    </Info>
                    <Info>
                        <InfoTitle>모집인원</InfoTitle>
                        <InfoItem margin={true}>
                            <strong>20명 (선착순 마감)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            입금 후에는 선지급 비용이 있어서 환불 어렵습니다
                        </InfoItem>
                    </Info>
                </InfoDivider>
                <InfoDivider>
                    <Info>
                        <InfoTitle>수강료</InfoTitle>
                        <InfoItem margin={false}>
                            딥러닝반 <span>월 18만원</span>
                        </InfoItem>
                        <InfoItem margin={true}>
                            <strong>→ 월 15만원</strong>{' '}
                        </InfoItem>
                        <InfoItem margin={false}>
                            수료 조건 충족 시{' '}
                            <strong>총 9만원 수강료 환급</strong>
                        </InfoItem>
                        <InfoItem margin={false}>
                            1. 학습 내용 블로그 게시
                        </InfoItem>
                        <InfoItem margin={false}>2. 프로젝트 제출</InfoItem>
                        <InfoItem margin={false}>3. 주차별 과제 완료</InfoItem>
                        <InfoItem margin={true}>4. 수강평 작성</InfoItem>
                        <InfoItem margin={false}>머신러닝반 총 40만원</InfoItem>
                        <InfoItem margin={false}>→ 총 30만원</InfoItem>
                        <InfoItem margin={true}>
                            <h1>머신러닝반 오픈 기념 EVENT</h1>
                        </InfoItem>
                    </Info>
                    <Info>
                        <InfoTitle>스터디 공간</InfoTitle>
                        <InfoItem margin={true}>
                            <strong>서울캠퍼스(두드림 신촌점)</strong>
                        </InfoItem>
                        <InfoItem margin={true}>
                            <strong>수원캠퍼스(스터디으라차 수원역점)</strong>
                        </InfoItem>
                        <InfoItem margin={false}>
                            저희 미래연구소 수업이 진행되는 장소는 신종
                            코로나바이러스에 대비해 공간이용 전과 후에 손이 많이
                            닿는 부분인 손잡이, 테이블, 의자를 안전기준이 확인된
                            소독제로 소독을 진행하며 체온 측정 뒤 입장하도록
                            합니다. 저희 미래연구소를 이용해주시는 분들의 안전이
                            확보될 수 있도록 노력하겠습니다.
                        </InfoItem>
                    </Info>
                </InfoDivider>
            </InfoWrapper>
        </Container>
    );
};

export default Term;
