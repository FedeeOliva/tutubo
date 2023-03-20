import styled from '@emotion/styled';

export const Card = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	height: 100px;
	width: 100%;
	position: relative;
	cursor: pointer;
	width: 100%;
`

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	height: 100%;
	justify-content: space-between;
	padding: 5px;
	padding-right: 35px;
`

export const Img = styled.img`
	height: inherit;
	width: auto;
`

export const Title = styled.h3`
	color: ${ ({theme}) => theme.colors.text};	
	display: -webkit-box; 
	font-family: 'Roboto';	
	font-size: 0.9em;
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: normal;
	line-height: 1.2em;
	max-height: calc(2 * 1.2em);
	max-width: 255px;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
`

export const Subtitle = styled.span`
	color: #aaaaaa;
	display: block;
	font-size: 0.8em;
`

export const Eliminar = styled.button`
		background: none;
		border: none;
		color: ${ ({theme}) => theme.colors.text};
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		&:hover{
			color: red;
			cursor: pointer;
		}
	
`
export const Barras = styled.i`
	align-items: center;
	color: ${ ({theme}) => theme.colors.text};
	display: flex;
	font-size: 1.6em;
	height: 100%;
	padding: 0 0.2em;
	cursor: move;
`;