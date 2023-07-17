import { useState } from 'react';
import Card from './Card';

const cardsList = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Cards ({gameCount, setGameCount, gameAnswers, setGameAnswers}) {
    const [cardStatusArray, setCardStatusArray] = useState([]);
    const [gameStatus, setGameStatus] = useState("init");


    if (gameCount === 0 && gameStatus === "init") {
        console.log("Cards.jsx | Entrou no setCardStatus");
        let array = [];
        cardsList.map( (cards) => array.push("closed") ); 
        setGameStatus("playing");
        setCardStatusArray(array);
    }

    return (
        cardsList.map( (cards, i) => 
                <Card key={i} cardNum={i} cardStatusArray={cardStatusArray} 
                setCardStatusArray={setCardStatusArray}
                cardQuestion={cards.question} cardAnswer={cards.answer}
                gameAnswers={gameAnswers} setGameAnswers={setGameAnswers} 
                gameCount={gameCount} setGameCount={setGameCount}
                />
              )
    );
}
