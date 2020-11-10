import styled from '@emotion/styled';
import {Container} from '../Container';


export const Navbar = styled.nav`
	background: #202020;	
	height: ${ ({theme}) => theme.navbarHeight};
	position: fixed;
	width: 100%;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	height: inherit;

	${ ({theme}) => theme.breakpoint.desktop}{

	}
`;

export const NavbarBrand = styled.a`
	align-items: center;
	color: white;
	font-weight: bold;
	font-size: 1.3rem;
	font-family: 'Roboto';
	height: inherit;
	display: flex;
	text-decoration: none;
	&:hover{
		color: #e2e2e2;
		cursor: pointer;
		text-decoration: none;
	}

	i{	
		font-size: 1.8rem;
		color:red;		
	}

`;
export const Form = styled.form`
	align-items: center;
	border: 1px solid #323232;	
	position: absolute;
	right: 0px;
	margin-right: 1em; /* 20/16 */

	${ ({theme}) => theme.breakpoint.desktop}{
		display: flex;		
		top:50%;
		left: 50%;
		right: auto;
		transform: translate(-50%,-50%);
		height: 30px;
	}
`;

export const FormInput = styled.input`
	background: #121212;
	border: none;
	color: #e2e2e2;
	font-family: 'Roboto';
	height: 30px;
	margin: 0;
	padding-left: 5px;
	width: 60px;
	transition: all .55s ease;
	cursor: pointer;

	&:focus{
		width: calc(100vw - 35px);
		cursor: text;
	}

	&::placeholder{
		color: #818181;
	}

	${ ({theme}) => theme.breakpoint.desktop}{
		cursor: text;
		width: 400px;

		&:focus{
			width: 400px;
		}
	}

`;

export const Submit = styled.button`	
	display: none;

	${ ({theme}) => theme.breakpoint.desktop}{
		background: #323232;
		border: none;
		color: grey;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 200;
		height: inherit;
		margin: 0;
		width: 60px;

		&:hover > i{
			color: #e2e2e2;
		}	
	}

`;