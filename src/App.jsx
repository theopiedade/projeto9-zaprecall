import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import Cards from './Cards';

function App() {
  return (
   <Body>
   <ContainerApp>
	<Logo>
		<img src="/assets/logo.png"/>
		<h1>ZapRecall</h1>
	</Logo>
	<Cards/>
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

 const Logo = styled.div`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	img {
		width: 52px;
		height: 60px;
	}
	h1 {
		margin-left: 10px;
		color: #FFF;
		text-align: center;
		font-family: Righteous;
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
 `