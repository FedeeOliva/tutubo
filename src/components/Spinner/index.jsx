import React from 'react';
import styled from '@emotion/styled';

const SpinnerStyle = styled.div`
	color: ${ ({theme}) => theme.colors.text};
	display: inline-block;
	position: relative;
	width: 60px;
	height: 60px;
	font-size: 0.7rem;

& div {
  transform-origin: 2.5em 2.5em; /* 40/16 */ /* 40/16 */
  animation: lds-spinner 1.2s linear infinite;
}
& div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 0.1875em; /* 3/16 */
  left: 2.3125em; /* 37/16 */
  width: 0.375em; /* 6/16 */
  height: 1.125em; /* 18/16 */
  border-radius: 20%;
  background: ${ ({theme}) => theme.colors.text};
}
& div:nth-of-type(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
& div:nth-of-type(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
& div:nth-of-type(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
& div:nth-of-type(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
& div:nth-of-type(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
& div:nth-of-type(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
& div:nth-of-type(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
& div:nth-of-type(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
& div:nth-of-type(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
& div:nth-of-type(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
& div:nth-of-type(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
& div:nth-of-type(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


`;

const Spinner = (props) => {
  return (
  	<SpinnerStyle data-testid='spinner'>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  		<div></div>
  	</SpinnerStyle>
  	)
}

export default Spinner;