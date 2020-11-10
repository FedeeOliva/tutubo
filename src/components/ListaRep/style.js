import styled from '@emotion/styled';


export const ListaReproduccion = styled.div`
	height: 100vh;
	background: ${ ({theme}) => theme.colors.background};
	overflow-y: scroll;
	width: 100%;
	ul{
		height: inherit;
		width: inherit;
		padding: 0;
	}
`;

export const Title = styled.h2`
	color: white;
	text-align: center;
	margin: 20px 0;
	width: 100%;
`;

export const Minimizar = styled.button`
	border: none;
	outline: none;
	background: none;
	color: ${ ({theme}) => theme.colors.text};
	cursor: pointer;
	font-size: 2em;
`;

export const Head = styled.div`
	display: flex;
	justify-content: space-around;
`