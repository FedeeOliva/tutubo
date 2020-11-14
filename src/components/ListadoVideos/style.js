import styled from '@emotion/styled';
import {Container} from '../Container'

export const ContenedorVideos = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding-top: ${ ({theme}) => theme.navbarHeight};
	min-height: 100vh;

	${ ({theme}) => theme.breakpoint.tablet}{
		padding-top: ${ ({theme}) => theme.navbarHeight};
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		padding-top: 0;		
		overflow: auto;
		scrollbar-width: thin;
		scrollbar-color: black grey;
		&::-webkit-scrollbar{
			display: none;
		}
	}
`;