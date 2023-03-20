import styled from '@emotion/styled';

export const Button = styled.button`
	background: #343D58;
	border-radius: 62.5em; /* 1000/16 */
	border: none;
	position: relative;
	cursor: pointer;
	display: flex;
	outline: none;
	font-size: 0.8rem;

	&::after{
		content: "";
		display: block;
		width: 1.675em; /* 30/16 */
		height: 1.675em; /* 30/16 */
		position: absolute;
		background: #F1F1F1;
		top: 0;
		left: 0;
		right: unset;
		border-radius: 6.25em; /* 100/16 */
		transition: .3s ease all;
		box-shadow: 0em 0em 0.125em 0.125em rgba(0,0,0,.2); /* 0/16 */ /* 0/16 */ /* 2/16 */ /* 2/16 */
	}

	&.active{
		background: #CCC;
		color: #000;

		&::after{
			right: 0;
			left: unset;
		}
	}

	span{
		width: 1.875em; /* 30/16 */
		height: 1.875em;; /* 30/16 */
		line-height: 1.875em; /* 30/16 */
		display: block;
		background: none;
		color: #FFF;
		font-size: 0.8em;
	}

	span:first-child{
		color: orange;
	}
`