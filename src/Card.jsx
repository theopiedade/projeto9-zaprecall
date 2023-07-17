import { useState } from 'react';
import styled from 'styled-components';

export default function Card({cardNum, cardStatusArray, 
    setCardStatusArray, cardQuestion, cardAnswer}) {
    const [cardStatus, setCardStatus] = useState(cardStatusArray[cardNum]);

    function cardSelect(card, action) {
        let array = cardStatusArray;
        console.log("Card.jsx | Array: "+array);
        array[card] = action;
        setCardStatusArray(array);
        setCardStatus(action);
    }
 
    if (cardStatus === "closed") 
        return (
            <CardClosed>
                <h1>Pergunta {cardNum+1}</h1>
                <img onClick={() => cardSelect(cardNum, "open")} src="/assets/seta_play.png"/>
            </CardClosed>
        )
    else if (cardStatus === "open") 
        return (
            <CardOpen>
                <h1>{cardQuestion}</h1>
                <img onClick={() => cardSelect(cardNum, "check")} src="/assets/seta_virar.png"/>
            </CardOpen>
        )
    else if (cardStatus === "check")
        return (
            <CardOpen>
                <h1>{cardAnswer}</h1>
                <ContainerButtons>
                    <Button color="#FF3030">Não lembro</Button>
                    <Button color="#FF922E">Quase não lembro</Button>
                    <Button color="#2FBE34">Zap!</Button>
                </ContainerButtons>
            </CardOpen>
        )
}


const CardClosed = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 65px;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    h1 {
      margin-left: 10px;
      color: #333;
      font-family: Recursive;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    img {
      margin-right: 10px;
      width: 20px;
      height: 23px;
    }
`;

const CardOpen = styled.div`
    margin-top: 10px;
    width: 299px;
    height: 131px;
    border-radius: 5px;
    background: #FFFFD4;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    
    h1 {
        margin-left: 15px;
        margin-top: 18px;
        color: #333;
        font-family: Recursive;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    img {
        width: 30px;
        height: 20px;
        margin-left: 256px;
        margin-bottom:10px;
    }
`
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 17px;
    margin-bottom: 10px;
`
const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 9px;
        height: 39px;
        border-radius: 5px;
        color: #FFF;
        background: ${props => (props.color)};
        font-family: Recursive;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
`