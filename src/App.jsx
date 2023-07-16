import { useState } from 'react'
import './App.css'
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

function App() {
  return (
   <Body>
   <ContainerApp>
	Teste
   </ContainerApp>
   </Body>
  )
}

export default App

const Body = styled.div`
	background-color: grey;
`

const ContainerApp = styled.div`
	width: 375px;
	height: 667px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #FB6B6B;
 `;
