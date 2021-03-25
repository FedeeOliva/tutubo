import styled from '@emotion/styled';
import {Container} from '../Container'

export const ContenedorVideos = styled(Container)`
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
	justify-items: center;
	gap: 25px;
	padding-bottom: 60px;
	overflow: auto;
	max-height: calc(100vh - 60px);
	width: 100%;

	${ ({theme}) => theme.breakpoint.tablet}{
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		padding-bottom: 0;				
		scrollbar-width: thin;
		scrollbar-color: black grey;
		&::-webkit-scrollbar{
			display: none;
		}
	}
`;

export const SpinnerCentered = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 30px;
`;

export const Info = styled.div`
	grid-column: 1/-1;

`;

export const Alert = styled.div`
	background: #DC3545;
	width: 80%;
	margin: 10px auto;
	padding: 20px;
	color: white;
	display: flex;
	justify-content: center;
`

