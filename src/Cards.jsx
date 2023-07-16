import styled from 'styled-components';

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

export default function Cards () {
    return (
        <Card>
           <h1>Pergunta 1</h1>
           <img src="/assets/seta_play.png"/>
        </Card>
    );
}

const Card = styled.div`
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