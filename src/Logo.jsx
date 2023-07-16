import styled from 'styled-components';

export default function Logo() {
    return (
    <LogoBar>
		<img src="/assets/logo.png"/>
		<h1>ZapRecall</h1>
	</LogoBar>
    )
}

const LogoBar = styled.div`
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