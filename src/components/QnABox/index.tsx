import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import device from '../../responsive';

const Wrapper = styled.div`
    width: 60%;
    margin: 0 auto;
`;

const QnAWrapper = styled.div`
    margin-top: 5%;
    & + * {
        margin-top: 0.5em;
    }
`;

const QnATitle = styled.div`
    font-weight: 600;
    cursor: pointer;
    color: #666;
    padding: 0.5em 1.5em;
    border: solid 1px #ccc;
    border-radius: 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 6px 0px #000000;

    &::after {
        content: '';
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid currentColor;
    }

    &:hover,
    &.open {
        color: black;
    }

    &.open {
        &::after {
            content: '';
            border-top: 0;
            border-bottom: 5px solid;
        }
    }
`;

interface OpenProp {
    isOpen: boolean;
}
const QnAItem = styled.div<OpenProp>`
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: ${(props) => (!props.isOpen ? '0' : '600px')};
    transition: ${(props) =>
        !props.isOpen
            ? 'max-height 0.35s cubic-bezier(0, 1, 0, 1)'
            : 'max-height 0.3s cubic-bezier(1, 0, 1, 0)'};
`;
const QnAContent = styled.div`
    padding: 1em 1.5em;
    line-height: 1.2;
    & > div {
        margin-bottom: 7px;
    }
`;

interface IProps {
    title: string;
    children: string;
}
const QnABox: React.FC<IProps> = ({ children, title }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Wrapper>
            <QnAWrapper>
                <QnATitle onClick={() => setOpen(!isOpen)}>{title}</QnATitle>
                <QnAItem isOpen={isOpen}>
                    <QnAContent>
                        {children &&
                            children
                                .split('|')
                                .map((value) => <div>{value}</div>)}
                    </QnAContent>
                </QnAItem>
            </QnAWrapper>
        </Wrapper>
    );
};

export default QnABox;
