import styled from '@emotion/styled';
/*CARD*/
export const Contenedor = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 15px;
	cursor: pointer;
	transition: 0.5s;
	&:hover{
		outline: 1px solid ${ ({theme}) => theme.colors.text};
	}
	
`;

export const Img = styled.img`
	width: 100%;
	height: auto;
	user-select: none;
`;

export const Body = styled.div`
	font-size: 0.9rem;
	padding: 5px;	
`;

export const Title = styled.h3`
	color: ${ ({theme}) => theme.colors.text};
	font-family: 'Roboto', sans-serif;
	font-size: inherit;
	display: -webkit-box;
	text-overflow: ellipsis;	
	-webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow:hidden;
    margin: 0.3em 0;
`;

export const Subtitle = styled.span`
	color: ${ ({theme}) => theme.colors.textSecondary};
	display: block;
	font-size: 0.9em;
`;

export * from './style.js';