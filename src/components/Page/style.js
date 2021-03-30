import styled from '@emotion/styled';
import {Container} from '../Container';

export const Grid = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${ ({theme}) => theme.colors.background};
	padding-top:  ${ ({theme}) => theme.navbarHeight};
	transition: .3s ease all;

	${ ({theme}) => theme.breakpoint.desktop}{
		max-height: 100vh;
	}
	
`;

export const ContainerMain = styled(Container)`
	${ ({theme}) => theme.breakpoint.desktop}{
		display: grid;
		grid-template-columns: 2fr 1fr;	
		
	}
`;