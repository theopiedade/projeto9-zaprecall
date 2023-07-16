import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from './Logo';
import Cards from './Cards';
import Status from './Status';

function App() {
  return (
   <>
   <GlobalStyle/>
   <Body>
	<ContainerApp>
		<Logo/>
		<Cards/>
		<Status/>
	</ContainerApp>

   </Body>
   </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  body {
	background-color: grey;
  }
`
const Body = styled.div`
	display: flex;

`
const ContainerApp = styled.div`
	width: 375px;
	height: 667px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #FB6B6B;
 `;

 