import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '../__mocks__/intersectionObserverMock'
import App from '../App';

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

test('<App/> se renderiza', () => {
	render(<App/>)
	const elem = screen.getByText(/tutubo/i);
	expect(elem).toBeInTheDocument();
});