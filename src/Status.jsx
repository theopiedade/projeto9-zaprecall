import styled from 'styled-components';

export default function Status({gameCount, gameAnswers}) {
    return (
        <StatusBar>
            <h1>{gameCount}/8 CONCLUÍDOS</h1>
        </StatusBar>
    )
}

const StatusBar = styled.div`
    position: relative;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 70px;
    background: #FFF;
    box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.05);
    h1 {
      color: #333;
      font-family: Recursive;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
`;