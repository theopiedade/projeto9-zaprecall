import { useState } from 'react'
import './App.css'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Logo from './Logo';
import Cards from './Cards';
import Status from './Status';

function App() {
  const [gameCount, setGameCount] = useState(0);
  const [gameAnswers, setGameAnswers] = useState([]);


  return (
   <>
   <GlobalStyle/>
	<ContainerApp>
		<Logo/>
		<Cards gameCount={gameCount} setGameCount={setGameCount} 
		gameAnswers={gameAnswers} setGameAnswers={setGameAnswers} />
		<Status gameCount={gameCount} setGameCount={setGameCount}
		gameAnswers={gameAnswers} setGameAnswers={setGameAnswers} />
	</ContainerApp>
   </>
  )
}

export default App

const ContainerApp = styled.div`
	width: 375px;
	height: 667px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #FB6B6B;
 `;

 const Body = styled.div`
 display: flex;

`

 const GlobalStyle = createGlobalStyle`
 html, body, div, span, applet, object, iframe,
 h1, h2, h3, h4, h5, h6, p, blockquote, pre,
 a, abbr, acronym, address, big, cite, code,
 del, dfn, em, img, ins, kbd, q, s, samp,
 small, strike, strong, sub, sup, tt, var,
 b, u, i, center,
 dl, dt, dd, ol, ul, li,
 fieldset, form, label, legend,
 table, caption, tbody, tfoot, thead, tr, th, td,
 article, aside, canvas, details, embed, 
 figure, figcaption, footer, header, hgroup, 
 menu, nav, output, ruby, section, summary,
 time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	background: #ECEDEE;
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
strong {
	font-weight: bold;
}
`

 