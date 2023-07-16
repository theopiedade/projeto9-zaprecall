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
        <>
        <Card>
           <h1>Pergunta 1</h1>
           <img src="/assets/seta_play.png"/>
        </Card>
        <CardOpen>
           <h1>O que é JSX?</h1>
           <img src="/assets/seta_virar.png"/>
        </CardOpen>
        <CardOpen>
           <h1>O que é JSX?</h1>
           <ContainerButtons>
                <Button color='#FF3030'>Não lembrei</Button>
                <Button color='#FF922E'>Quase não lembrei</Button>
                <Button color='#2FBE34'>Zap!</Button>

           </ContainerButtons>
        </CardOpen>
        </>
    );
}

const Card = styled.div`
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