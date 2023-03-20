import styled from '@emotion/styled';

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 0.5em;
	//width: 100%;	

	${ ({theme}) => theme.breakpoint.tablet}{
		padding: 0 0.9375em;
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		padding: 0 1.5625em;
		max-width: 1140px;
	}


`;