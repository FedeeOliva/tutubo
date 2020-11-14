import styled from '@emotion/styled';
import {Container} from '../Container';

export const Grid = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${ ({theme}) => theme.colors.background};

	${ ({theme}) => theme.breakpoint.desktop}{
		height: 100vh;
		overflow: hidden;
	}
	
`;

export const ContainerMain = styled(Container)`
	${ ({theme}) => theme.breakpoint.desktop}{
		display: grid;
		grid-template-columns: 2fr 1fr;		
		padding-top: ${ ({theme}) => theme.navbarHeight};
		height: inherit;
	}
`;