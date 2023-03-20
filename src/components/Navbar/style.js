import styled from '@emotion/styled';
import {Container} from '../Container';


export const Navbar = styled.nav`
	background: ${ ({theme}) => theme.colors.navbar};	
	height: ${ ({theme}) => theme.navbarHeight};
	position: fixed;
	top: 0;
	width: 100%;
	transition: .3s ease all;

	${ ({theme}) => theme.breakpoint.desktop}{
		z-index: 1000;
	}
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
	color:  ${ ({theme}) => theme.colors.text};
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
	display: flex;
	justify-content: center;
	width:100%;
	height: inherit;
	background: ${ ({theme}) => theme.colors.background};	
	position: absolute;
	top: -100%;
	left: 0px;
	margin-right: 1em; /* 20/16 */
	transition: .3s ease all;

	${ ({theme}) => theme.breakpoint.desktop}{
		display: flex;		
		top:50%;
		left: 50%;
		right: auto;
		transform: translate(-50%,-50%);
		height: 30px;
		width: auto;
	}
`;

export const InputGroup = styled.fieldset`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #323232;
	margin: 0;	
	padding: 0;
	${ ({theme}) => theme.breakpoint.desktop}{
		height: inherit;
	}
`;
export const FormInput = styled.input`
	background: none;
	border: none;
	color: ${ ({theme}) => theme.colors.text};
	font-family: 'Roboto';
	height: 30px;
	margin: 0;
	padding-left: 5px;
	width: 80vw;
	transition: all .55s ease;
	cursor: pointer;

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

export const BtnCerrar = styled.button`
	background: none;
	border: none;
	color: ${ ({theme}) => theme.colors.text};
	font-size: 1.2em;
	cursor: pointer;

	${ ({theme}) => theme.breakpoint.desktop}{
		display: none;
	}
`;

export const BtnAbrir = styled(BtnCerrar)``;