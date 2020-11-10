import styled from '@emotion/styled';
import {Container} from '../Container';

export const Grid = styled.div`
	width: 100%;
	min-height: 100vh;
	background: ${ ({theme}) => theme.colors.background};

	
`;

export const ContainerMain = styled(Container)`
	${ ({theme}) => theme.breakpoint.desktop}{
		display: grid;
		grid-template-columns: 2fr 1fr;
	}
`;