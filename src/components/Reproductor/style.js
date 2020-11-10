import styled from '@emotion/styled';

export const Rep = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	position: fixed; 
	top: 0;
	left: 0;

	${ ({theme}) => theme.breakpoint.desktop}{
		position: static;		
	}
`;

export const RepContainer = styled.div`
	position: relative;
	padding-top: 56.25%;
`;

export const RepMinimizado = styled.div`
	background: ${ ({theme}) => theme.colors.navbar};
	bottom: 0;
	display: flex;
	justify-content: space-around;
	height: 60px;
	left: 0;
	position: fixed;
	width: 100vw;

`;

export const Title = styled.h3`
	color: ${ ({theme}) => theme.colors.text};
	font-family: ${ ({theme}) => theme.fontFamily.Roboto};

`;

export const Maximizar = styled.button`
	border: none;
	outline: none;
	background: none;
	color: ${ ({theme}) => theme.colors.text};
	cursor: pointer;
	font-size: 2em;
`;