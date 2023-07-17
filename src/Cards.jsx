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


export default function Cards ({gameCount, setGameCount}) {
    const [cardStatus, setCardStatus] = useState([]);
    const [gameStatus, setGameStatus] = useState("init");

    //console.log("Cards | gameCount:"+gameCount);
    console.log("Cards | gameStatus:"+gameStatus);

    if (gameCount === 0 && gameStatus === "init") {
        console.log("Cards.jsx | Entrou no setCardStatus");
        let array = [];
        cardsList.map( 
            (cards) => array.push("closed") 
            ); 
        console.log("Array:"+array);
        setGameStatus("playing");
        setCardStatus(array);
    }

    //console.log("Cards.jsx | cardStatus[0]",cardStatus[0]);

    return (
        cardsList.map( (cards, i) => 
                <Card key={i} cardNum={i} cardStatus={cardStatus[i]} setCardStatus={setCardStatus}
                cardQuestion={cards.question} cardAnswer={cards.answer} />
              )
    );
}
